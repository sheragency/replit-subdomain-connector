const benefits = [
  "A technician on call around the clock",
  "Warranty on our work: 12 months, parts and labour",
  "Clear quotes and accurate invoices",
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="mx-auto max-w-[1440px] px-5 lg:px-10">
      {/* Text first, in open paper (planned negative space), then the framed daylight photo */}
      <div className="grid grid-cols-1 pt-8 pb-10 lg:grid-cols-12 lg:gap-x-10 lg:pt-10 lg:pb-12">
        <div className="lg:col-span-7">
          <p className="motion-rise mb-5 text-[14px] text-mute lg:mb-7 lg:text-[15px]" style={{ ["--d" as string]: "100ms" }}>Blk Box Maintenance · Calgary, AB</p>
          <h1 id="hero-heading" className="motion-rise text-[44px] leading-[1.02] font-light tracking-[-0.035em] text-ink lg:text-[88px] lg:leading-[0.98]" style={{ ["--d" as string]: "200ms" }}>
            24/7 commercial door repair in Calgary
          </h1>
        </div>
        <div className="mt-7 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end">
          <p className="motion-rise text-[16px] leading-[1.55] text-graphite lg:text-[17px]" style={{ ["--d" as string]: "300ms" }}>
            Blk Box Maintenance repairs and installs commercial overhead, entrance and man doors across Calgary, with a technician on call 24/7. We work for property and building managers, on commercial buildings only.
          </p>
          <ul className="motion-rise mt-6 border-t border-ink" style={{ ["--d" as string]: "380ms" }}>
            {benefits.map((b) => (
              <li key={b} className="flex items-baseline gap-3 border-b border-rule py-[10px] text-[15px] leading-[1.4] text-ink">
                <span aria-hidden className="h-[5px] w-[5px] shrink-0 translate-y-[-3px] bg-signal" />{b}
              </li>
            ))}
          </ul>
          <div className="motion-rise mt-7 flex flex-wrap items-center gap-x-8 gap-y-4" style={{ ["--d" as string]: "460ms" }}>
            <a href="/contact-us/#quote" className="group inline-flex h-[52px] items-stretch bg-ink text-[15px] font-medium text-paper">
              <span className="flex items-center px-6">Request a quote</span><span aria-hidden className="flex w-[52px] items-center justify-center bg-signal text-white"><span className="arrow">→</span></span>
            </a>
            <a href="/vendor-information/#package" className="group text-[15px] text-ink underline decoration-ink/35 underline-offset-[6px] hover:decoration-ink">Request our vendor package</a>
          </div>
          <div aria-hidden className="relative mt-6 h-[150px] overflow-hidden rounded-[6px] lg:hidden"><img src="/images/hero-glass-entrance-daylight.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_55%] brightness-[1.06] sepia-[0.1]" /></div>
          <p className="mt-5 text-[14px] text-mute">Emergency? Call 24/7: <a id="hero-call" href="tel:+15873511844" className="text-ink underline decoration-ink/35 underline-offset-4">(587) 351-1844</a></p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[8px] bg-rule max-lg:hidden lg:h-[640px]">
        <img src="/images/hero-glass-entrance-daylight.jpg" alt="Clean glass entrance doors of a modern commercial building, the entrance door systems Blk Box Maintenance services in Calgary"
          className="motion-settle absolute inset-0 h-full w-full object-cover object-[50%_60%] brightness-[1.06] saturate-[0.95] sepia-[0.1] contrast-[1.02]" />
      </div>
    </section>
  );
}
