import { H2, TextLink } from "./ui";
const steps = [
  ["Reach us at any hour", <>Call <a href="tel:+15873511844" className="underline underline-offset-4 decoration-ink/35">(587) 351-1844</a> for a door that’s down now, or send a quote request for planned work.</>],
  ["Get a technician on the door", "A technician looks at the door and finds what’s actually wrong. Inside Calgary, we’re on site within 4 hours."],
  ["Approve a written quote", "You see the price in writing before the repair goes ahead, then the work gets done."],
  ["Receive a clean invoice and a warranty", "The invoice matches the quote, and the work is covered by our warranty: 12 months on parts and labour."],
] as const;
export default function Process() {
  return (
    <section aria-labelledby="how-h" className="bg-[#fbfaf7]"><div className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-40">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10">
        <H2 id="how-h" className="lg:col-span-7">What happens after you call, from the first ring to the invoice</H2>
        <p className="text-[16px] leading-[1.6] text-graphite lg:col-span-4 lg:col-start-9 lg:self-end lg:text-[17px]">Nights, weekends and holidays included: someone from our rotating crew of technicians is on call for overhead and man doors.</p>
      </div>
      <ol className="relative mt-14 grid grid-cols-1 lg:mt-24 lg:grid-cols-4 lg:gap-x-10">
        <span aria-hidden className="absolute top-0 bottom-0 left-[4px] w-px bg-ink lg:top-[4px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
        {steps.map(([h, t], i) => (
          <li key={h} className="relative pb-10 pl-10 lg:pt-12 lg:pb-0 lg:pl-0">
            <span aria-hidden className={`absolute top-[6px] left-0 h-[9px] w-[9px] lg:top-0 bg-ink`} />
            <p className="text-[56px] leading-none font-light tracking-[-0.04em] text-ink/15 tabular-nums lg:text-[88px]">{i + 1}</p>
            <h3 className="mt-3 text-[21px] leading-[1.2] font-light tracking-[-0.015em] lg:mt-6 lg:text-[24px]">{h}</h3>
            <p className="mt-3 max-w-[320px] text-[15.5px] leading-[1.55] text-graphite">{t}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-rule pt-10 lg:mt-20">
        <a href="tel:+15873511844" className="group inline-flex h-[52px] items-stretch bg-ink text-[15px] font-medium text-paper"><span className="flex items-center px-6">Call 24/7: (587) 351-1844</span><span aria-hidden className="flex w-[52px] items-center justify-center bg-signal text-white"><span className="arrow">→</span></span></a>
        <TextLink href="/contact-us/#quote">Request a quote</TextLink>
      </div>
    </div></section>
  );
}
