const links = [
  ["Overhead Doors", "/commercial-overhead-door-repair/"],
  ["Entrance & Man Doors", "/commercial-entrance-door-repair/"],
  ["Credentials", "/vendor-information/"],
  ["About", "/about-us/"],
  ["Contact", "/contact-us/"],
];

export default function SiteNav() {
  return (
    <>
      <header className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center px-5 lg:h-[96px] lg:px-10">
        <a href="/" aria-label="Blk Box Maintenance home">
          <img src="/images/blk-box-logo-black.png" alt="Blk Box Maintenance" width={351} height={147} className="h-[32px] w-auto lg:h-[40px]" />
        </a>
        <nav aria-label="Main" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-10 text-[15px] text-ink/80">
            {links.map(([l, h]) => (<li key={h}><a href={h} className="transition-colors hover:text-ink">{l}</a></li>))}
          </ul>
        </nav>
        <div className="hidden items-center gap-8 lg:flex">
          <a href="tel:+15873511844" className="text-[15px] text-ink underline decoration-ink/30 underline-offset-[6px]">24/7 (587) 351-1844</a>
          <a href="/contact-us/#quote" className="inline-flex h-11 items-center bg-ink px-5 text-[14.5px] font-medium text-paper">Request a quote</a>
        </div>
        <button aria-label="Open menu" className="col-start-3 flex items-center gap-3 text-[14px] lg:hidden">
          Menu <span className="flex h-9 w-9 items-center justify-center border border-ink"><span className="block h-px w-4 bg-ink shadow-[0_5px_0_var(--color-ink),0_-5px_0_var(--color-ink)]" /></span>
        </button>
      </header>
      <a href="tel:+15873511844" data-sticky-call aria-hidden="true" style={{ opacity: 0, transition: "opacity .4s", marginBottom: "env(safe-area-inset-bottom)" }} className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-rule bg-paper/95 px-5 py-4 text-ink backdrop-blur lg:hidden">
        <span className="text-[15px] font-medium">Call 24/7: (587) 351-1844</span>
        <span aria-hidden className="h-[7px] w-[7px] bg-signal" />
      </a>
    </>
  );
}
