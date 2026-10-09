const links = [["Overhead door repair", "/commercial-overhead-door-repair/"], ["Entrance and man door repair", "/commercial-entrance-door-repair/"], ["Our services", "/services/"], ["About", "/about-us/"], ["Credentials and vendor info", "/vendor-information/"], ["Contact", "/contact-us/"]];
export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-y-12 border-t border-paper/20 pt-14 lg:grid-cols-12 lg:gap-x-10 lg:pt-16">
          <div className="lg:col-span-4">
            <img src="/images/blk-box-logo-white.png" alt="Blk Box Maintenance" width={351} height={147} className="h-[40px] w-auto" />
            <h2 className="mt-8 text-[15px] font-medium">Blk Box Maintenance</h2>
            <p className="mt-3 max-w-[340px] text-[14.5px] leading-[1.6] text-paper/65">Commercial overhead, entrance and man door repair in Calgary, AB. BLK BOX Maintenance Inc. Bay 4, 3615 61 Avenue SE, Calgary, AB T2C 1Z4.</p>
          </div>
          <div className="lg:col-span-3 lg:col-start-6">
            <h2 className="text-[15px] font-medium">Reach us</h2>
            <ul className="mt-3 grid gap-2 text-[14.5px] text-paper/65">
              <li>24/7: <a href="tel:+15873511844" className="text-paper underline decoration-paper/35 underline-offset-4">(587) 351-1844</a></li>
              <li><a href="mailto:service@blk-box.ca" className="text-paper underline decoration-paper/35 underline-offset-4">service@blk-box.ca</a></li>
              <li>Office: Mon–Sun, 7am–5pm</li><li>Emergencies: 24/7</li>
            </ul>
          </div>
          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-10">
            <ul className="grid gap-2 text-[14.5px]">{links.map(([l, h]) => <li key={h}><a href={h} className="text-paper/85 hover:text-paper">{l}</a></li>)}</ul>
            <a href="https://www.linkedin.com/company/blk-box-maintenance/" aria-label="Blk Box Maintenance on LinkedIn" className="mt-6 inline-flex h-9 w-9 items-center justify-center border border-paper/40 text-[13px] font-semibold hover:border-paper">in</a>
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 text-[14px] text-paper/55 lg:flex-row lg:justify-between">
          <p>© 2026 Blk Box Maintenance. All rights reserved.</p>
          <a href="/privacy-policy/" className="underline decoration-paper/30 underline-offset-4">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
