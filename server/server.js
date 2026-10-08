const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const DO_API_TOKEN = process.env.DO_API_TOKEN;
const DOMAIN = 'sher.dev';

// Validate subdomain format (alphanumeric and hyphens only)
function isValidSubdomain(subdomain) {
  return /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(subdomain);
}

// Validate IP address format
function isValidIP(ip) {
  return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip);
}

const DO_RECORDS_URL = `https://api.digitalocean.com/v2/domains/${DOMAIN}/records`;
// DigitalOcean's maximum page size. The default is 20, which is not the full zone.
const DO_RECORDS_PER_PAGE = 200;
const MAX_RECORD_PAGES = 100;

function isDoRecordsPage(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch (err) {
    return false;
  }

  return parsed.protocol === 'https:' &&
    parsed.hostname === 'api.digitalocean.com' &&
    (parsed.port === '' || parsed.port === '443') &&
    parsed.pathname === `/v2/domains/${DOMAIN}/records`;
}

// A name is taken when any A or TXT record uses it. DigitalOcean stores the
// relative label in record.name (for example "myerscapital") and filters the
// list endpoint by the FQDN (for example "myerscapital.sher.dev").
function recordClaimsSubdomain(record, subdomain) {
  return record.name === subdomain && (record.type === 'A' || record.type === 'TXT');
}

// The list endpoint is paginated even when filtered by name. Query this FQDN
// directly (so a large zone cannot hide the name on a later page) and follow
// links.pages.next until that name's records are exhausted.
async function subdomainRecordExists(subdomain) {
  const fqdn = `${subdomain}.${DOMAIN}`;
  let url = `${DO_RECORDS_URL}?name=${encodeURIComponent(fqdn)}&per_page=${DO_RECORDS_PER_PAGE}`;
  const seen = new Set();

  for (let page = 0; page < MAX_RECORD_PAGES; page++) {
    if (!isDoRecordsPage(url) || seen.has(url)) {
      throw new Error('Unexpected DigitalOcean records page URL');
    }
    seen.add(url);

    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${DO_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const records = response.data.domain_records || [];
    if (records.some(record => recordClaimsSubdomain(record, subdomain))) {
      return true;
    }

    const next = response.data.links?.pages?.next;
    if (!next) {
      return false;
    }

    // Rebuild the next page ourselves so a next link that drops ?name=
    // cannot fall back to an unfiltered slice of the zone.
    const nextUrl = new URL(next, DO_RECORDS_URL);
    const nextPage = nextUrl.searchParams.get('page');
    if (!isDoRecordsPage(nextUrl.href) || !nextPage || !/^[1-9]\d*$/.test(nextPage)) {
      throw new Error('Unexpected DigitalOcean records page URL');
    }
    url = `${DO_RECORDS_URL}?name=${encodeURIComponent(fqdn)}&per_page=${DO_RECORDS_PER_PAGE}&page=${nextPage}`;
  }

  throw new Error('DigitalOcean record listing exceeded page limit');
}

// Check subdomain availability
app.post('/api/check-availability', async (req, res) => {
  const { subdomain } = req.body;

  if (!subdomain) {
    return res.status(400).json({ error: 'Subdomain is required' });
  }

  if (!isValidSubdomain(subdomain)) {
    return res.status(400).json({ 
      error: 'Invalid subdomain format. Use only lowercase letters, numbers, and hyphens.' 
    });
  }

  try {
    const subdomainExists = await subdomainRecordExists(subdomain);

    res.json({ 
      available: !subdomainExists,
      subdomain: `${subdomain}.${DOMAIN}`
    });
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ 
        error: `Domain ${DOMAIN} not found in DigitalOcean. Please add the domain first.` 
      });
    }
    console.error('Error checking availability:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to check subdomain availability. Please try again.' 
    });
  }
});

// Create DNS records
app.post('/api/create-records', async (req, res) => {
  const { subdomain, txtValue, aValue } = req.body;

  // Validation
  if (!subdomain || !txtValue || !aValue) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!isValidSubdomain(subdomain)) {
    return res.status(400).json({ 
      error: 'Invalid subdomain format' 
    });
  }

  if (!isValidIP(aValue)) {
    return res.status(400).json({ 
      error: 'Invalid IP address format' 
    });
  }

  try {
    // Create TXT record
    const txtRecord = await axios.post(
      `https://api.digitalocean.com/v2/domains/${DOMAIN}/records`,
      {
        type: 'TXT',
        name: subdomain,
        data: txtValue,
        ttl: 3600
      },
      {
        headers: {
          'Authorization': `Bearer ${DO_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Create A record
    const aRecord = await axios.post(
      `https://api.digitalocean.com/v2/domains/${DOMAIN}/records`,
      {
        type: 'A',
        name: subdomain,
        data: aValue,
        ttl: 3600
      },
      {
        headers: {
          'Authorization': `Bearer ${DO_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ 
      success: true,
      subdomain: `${subdomain}.${DOMAIN}`,
      url: `https://${subdomain}.${DOMAIN}`,
      records: {
        txt: txtRecord.data.domain_record,
        a: aRecord.data.domain_record
      }
    });
  } catch (error) {
    console.error('Error creating records:', error.response?.data || error.message);
    
    if (error.response?.status === 404) {
      return res.status(404).json({ 
        error: `Domain ${DOMAIN} not found in DigitalOcean.` 
      });
    }
    
    if (error.response?.status === 422) {
      return res.status(422).json({ 
        error: 'Record already exists or invalid data provided.' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to create DNS records. Please try again.' 
    });
  }
});

// Serve React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// `node server.js` listens. Requiring the module (unit tests) must not bind a port.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
