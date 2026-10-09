import { H2, TextLink, Call } from "./ui";
const cards = [
  { h: "Commercial overhead door repair and installation", t: "Overhead, freight and garage-style doors on warehouses, plazas, parkades and towers, fixed or replaced.", l: "Overhead door repair in Calgary", href: "/commercial-overhead-door-repair/", grade: "brightness-[1.32] contrast-[1.05] saturate-[0.9] sepia-[0.12]", img: "/images/svc-overhead-facade.jpg", alt: "Blk Box Maintenance well-kept commercial overhead doors set in a brick building facade", pos: "62% 62%", span: "lg:col-span-7", ar: "aspect-[4/3] lg:aspect-[7/5]" },
  { h: "Entrance and man door repair", t: "The front entrance and everyday doors people walk through, repaired before a broken lock or closer becomes a building-wide problem.", l: "Entrance and man door repair in Calgary", href: "/commercial-entrance-door-repair/", grade: "brightness-[1.03] saturate-[0.85] sepia-[0.08]", img: "/images/svc-glass-entrance.jpg", alt: "Blk Box Maintenance commercial glass entrance doors in a bright building lobby", pos: "60% 50%", span: "lg:col-span-4 lg:col-start-9 lg:mt-40", ar: "aspect-[4/3] lg:aspect-[4/5]" },
];
export default function Services() {
  return (
    <section aria-labelledby="svc-h" className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-10 lg:pb-40">
      <div className="grid grid-cols-1 gap-y-6 border-t border-ink pt-10 lg:grid-cols-12 lg:gap-x-10 lg:pt-14">
        <H2 id="svc-h" className="lg:col-span-7">The two kinds of commercial doors we repair and install</H2>
        <p className="text-[16px] leading-[1.6] text-graphite lg:col-span-4 lg:col-start-9 lg:self-end lg:text-[17px]">Most of our work is repair: getting a broken door working again so tenants, deliveries and staff can get in and out. We install new doors too.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-14 lg:mt-20 lg:grid-cols-12 lg:gap-x-10">
        {cards.map((c) => (
          <article key={c.h} className={c.span}>
            <div className={`relative overflow-hidden rounded-[6px] bg-rule ${c.ar}`}><img src={c.img} alt={c.alt} className={`absolute inset-0 h-full w-full object-cover ${c.grade}`} style={{ objectPosition: c.pos }} /></div>
            <div className="mt-6 grid gap-4 lg:mt-8">
              <h3 className="max-w-[520px] text-[24px] leading-[1.15] font-light tracking-[-0.02em] lg:text-[30px]">{c.h}</h3>
              <p className="max-w-[480px] text-[16px] leading-[1.6] text-graphite">{c.t}</p>
              <div className="mt-1"><TextLink href={c.href}>{c.l}</TextLink></div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-16 flex flex-wrap items-baseline gap-x-2 border-y border-rule py-5 text-[15px] text-mute lg:mt-20">Not sure what you need? <span className="text-ink">Call 24/7: <Call className="decoration-ink/35" /></span></p>
    </section>
  );
}
