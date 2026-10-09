const facts = [
  ["24/7", "One technician is always on call for overhead and man doors."],
  ["$5M liability", "Commercial liability insurance with Intact Insurance."],
  ["WCB Alberta", "In good standing, clearance letter on request."],
];

export default function TrustStrip() {
  return (
    <section aria-label="Credentials at a glance" className="mx-auto max-w-[1440px] px-5 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-36">
      <dl className="grid grid-cols-1 border-t border-ink lg:grid-cols-3">
        {facts.map(([h, t], i) => (
          <div key={h} className={`relative min-w-0 py-8 lg:pt-10 lg:pb-2 ${i ? "border-t border-rule lg:border-t-0 lg:border-l lg:pl-10" : ""} lg:pr-10`}>
            <span aria-hidden className={`absolute top-[-5px] left-0 h-[9px] w-[9px] bg-ink ${i ? "lg:left-[-5px]" : ""}`} />
            <dt className="text-[40px] leading-[1.05] font-light tracking-[-0.03em] lg:text-[52px]">{h}</dt>
            <dd className="mt-4 max-w-[340px] text-[15.5px] leading-[1.5] text-mute">{t}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
