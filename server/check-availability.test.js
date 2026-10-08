const assert = require('node:assert/strict');
const http = require('node:http');
const { describe, it, beforeEach } = require('node:test');
const axios = require('axios');

process.env.DO_API_TOKEN = 'test-token';
process.env.PORT = '0';

const app = require('./server');

const DOMAIN = 'sher.dev';
const RECORDS_PATH = `/v2/domains/${DOMAIN}/records`;

// More than one max-sized DigitalOcean page (200). Targets sit past record 20
// and past record 200 so a first-page read cannot see them.
function buildZone() {
  const records = [];

  for (let i = 0; i < 210; i++) {
    records.push({
      id: i + 1,
      type: 'A',
      name: `filler${i}`,
      data: '203.0.113.10',
      ttl: 3600
    });
  }

  records.push({
    id: 10001,
    type: 'A',
    name: 'myerscapital',
    data: '203.0.113.21',
    ttl: 3600
  });
  records.push({
    id: 10002,
    type: 'TXT',
    name: 'vfis',
    data: 'replit-verify=vfis',
    ttl: 3600
  });

  // One name whose A record is on the second page of a name-filtered listing
  // at per_page=200. Page 1 is only CNAMEs, which do not claim the name.
  for (let i = 0; i < 200; i++) {
    records.push({
      id: 20000 + i,
      type: 'CNAME',
      name: 'multipage',
      data: `cname${i}.example.net`,
      ttl: 3600
    });
  }
  records.push({
    id: 30000,
    type: 'A',
    name: 'multipage',
    data: '203.0.113.99',
    ttl: 3600
  });

  return records;
}

const zone = buildZone();
const calls = [];

function matchesNameFilter(record, nameParam) {
  if (!nameParam) {
    return true;
  }
  if (record.name === '@') {
    return nameParam === DOMAIN;
  }
  return nameParam === `${record.name}.${DOMAIN}`;
}

function installZoneMock() {
  axios.get = async (url, config) => {
    calls.push({ url, config });
    const parsed = new URL(url);
    if (parsed.pathname !== RECORDS_PATH) {
      const error = new Error('not found');
      error.response = { status: 404, data: {} };
      throw error;
    }

    const name = parsed.searchParams.get('name');
    const perPage = Number(parsed.searchParams.get('per_page') || 20);
    const page = Number(parsed.searchParams.get('page') || 1);
    const matched = zone.filter(record => matchesNameFilter(record, name));
    const start = (page - 1) * perPage;
    const slice = matched.slice(start, start + perPage);
    const pages = {};

    if (start + perPage < matched.length) {
      const next = new URL(parsed.href);
      next.searchParams.set('page', String(page + 1));
      if (!next.searchParams.get('per_page')) {
        next.searchParams.set('per_page', String(perPage));
      }
      // Drop the name filter. The client must put it back; following this
      // link unchanged would scan an unfiltered page instead.
      next.searchParams.delete('name');
      pages.next = next.href;
    }

    return {
      data: {
        domain_records: slice,
        links: { pages },
        meta: { total: matched.length }
      }
    };
  };
}

function postJson(path, body) {
  return new Promise((resolve, reject) => {
    const server = app.listen(0, '127.0.0.1');
    const fail = (err) => {
      server.close(() => reject(err));
    };

    server.on('listening', () => {
      const { port } = server.address();
      const payload = JSON.stringify(body);
      const req = http.request({
        host: '127.0.0.1',
        port,
        path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          Connection: 'close'
        }
      }, (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const raw = Buffer.concat(chunks).toString('utf8');
          let parsed = raw;
          try {
            parsed = JSON.parse(raw);
          } catch (err) {
            parsed = raw;
          }
          server.close((closeErr) => {
            if (closeErr) {
              reject(closeErr);
              return;
            }
            resolve({ status: res.statusCode, body: parsed });
          });
        });
      });

      req.on('error', fail);
      req.write(payload);
      req.end();
    });

    server.on('error', reject);
  });
}

describe('POST /api/check-availability', { concurrency: false }, () => {
  beforeEach(() => {
    calls.length = 0;
    installZoneMock();
  });

  it('reports a name past the first page as taken', async () => {
    const myersIndex = zone.findIndex(record => record.name === 'myerscapital');
    assert.ok(myersIndex >= 20, 'fixture must place myerscapital past record 20');
    assert.ok(myersIndex >= 200, 'fixture must place myerscapital past a 200-record page');

    const res = await postJson('/api/check-availability', { subdomain: 'myerscapital' });

    assert.equal(res.status, 200);
    assert.deepEqual(res.body, {
      available: false,
      subdomain: 'myerscapital.sher.dev'
    });
    assert.ok(calls.length >= 1);
    const requested = new URL(calls[0].url);
    assert.equal(requested.searchParams.get('name'), 'myerscapital.sher.dev');
    assert.equal(requested.searchParams.get('per_page'), '200');
    assert.equal(calls[0].config.headers.Authorization, 'Bearer test-token');
  });

  it('reports a TXT name past the first page as taken', async () => {
    const vfisIndex = zone.findIndex(record => record.name === 'vfis');
    assert.ok(vfisIndex > 20);

    const res = await postJson('/api/check-availability', { subdomain: 'vfis' });

    assert.equal(res.status, 200);
    assert.deepEqual(res.body, {
      available: false,
      subdomain: 'vfis.sher.dev'
    });
    assert.equal(new URL(calls[0].url).searchParams.get('name'), 'vfis.sher.dev');
  });

  it('reports an absent name as available', async () => {
    const res = await postJson('/api/check-availability', { subdomain: 'nottaken' });

    assert.equal(res.status, 200);
    assert.deepEqual(res.body, {
      available: true,
      subdomain: 'nottaken.sher.dev'
    });
    assert.equal(calls.length, 1);
    const requested = new URL(calls[0].url);
    assert.equal(requested.searchParams.get('name'), 'nottaken.sher.dev');
    assert.equal(requested.pathname, RECORDS_PATH);
  });

  it('follows multi-page name results until an A record on a later page', async () => {
    const res = await postJson('/api/check-availability', { subdomain: 'multipage' });

    assert.equal(res.status, 200);
    assert.deepEqual(res.body, {
      available: false,
      subdomain: 'multipage.sher.dev'
    });
    assert.ok(calls.length >= 2, 'name-filtered results must be read past page 1');

    const first = new URL(calls[0].url);
    const second = new URL(calls[1].url);
    assert.equal(first.searchParams.get('name'), 'multipage.sher.dev');
    assert.equal(first.searchParams.get('per_page'), '200');
    assert.equal(second.searchParams.get('name'), 'multipage.sher.dev');
    assert.equal(second.searchParams.get('page'), '2');
    assert.equal(calls[0].config.headers.Authorization, 'Bearer test-token');
    assert.equal(calls[1].config.headers.Authorization, 'Bearer test-token');
  });

  it('does not report a name available when the next page repeats', async () => {
    axios.get = async (url) => {
      calls.push({ url });
      return {
        data: {
          domain_records: [{
            id: 1,
            type: 'CNAME',
            name: 'loopname',
            data: 'example.net'
          }],
          links: { pages: { next: url } },
          meta: { total: 2 }
        }
      };
    };

    const res = await postJson('/api/check-availability', { subdomain: 'loopname' });

    assert.equal(res.status, 500);
    assert.equal(res.body.error, 'Failed to check subdomain availability. Please try again.');
    assert.equal(res.body.available, undefined);
  });

  it('keeps the domain-not-found response', async () => {
    axios.get = async () => {
      const error = new Error('not found');
      error.response = { status: 404, data: { id: 'not_found' } };
      throw error;
    };

    const res = await postJson('/api/check-availability', { subdomain: 'missingzone' });

    assert.equal(res.status, 404);
    assert.equal(
      res.body.error,
      'Domain sher.dev not found in DigitalOcean. Please add the domain first.'
    );
  });

  it('rejects an invalid subdomain before calling DigitalOcean', async () => {
    const res = await postJson('/api/check-availability', { subdomain: 'Not Valid' });

    assert.equal(res.status, 400);
    assert.match(res.body.error, /Invalid subdomain format/);
    assert.equal(calls.length, 0);
  });
});
