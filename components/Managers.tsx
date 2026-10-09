import { H2, QuoteButton } from "./ui";
const pts = [
  ["A real person answers", "Call and you reach someone who takes the details and tells you what happens next."],
  ["Quotes that hold", "You get a written quote before work starts, so the number you approve is the number you plan for."],
  ["Invoices finance can approve", "Line items match the quote and the work done, so nothing bounces back from accounts payable."],
  ["We come back if it fails", "Our work is warrantied, so a repeat failure is ours to fix, not a new bill for your building."],
];
export default function Managers() {
  return (
    <section aria-labelledby="pm-h" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-36">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10">
          <H2 id="pm-h" dark className="lg:col-span-7">Built for property managers who are tired of chasing contractors</H2>
          <p className="text-[16px] leading-[1.6] text-paper/70 lg:col-span-4 lg:col-start-9 lg:self-end lg:text-[17px]">Plenty of door shops get to you when they can, quote loosely and send an invoice you have to question. You get a team that picks up, puts it in writing and shows up when it said it would.</p>
        </div>
        <dl className="mt-14 grid grid-cols-1 border-t border-paper/25 lg:mt-24 lg:grid-cols-4">
          {pts.map(([h, t], i) => (
            <div key={h} className={`relative py-8 lg:pt-10 lg:pr-8 ${i ? "border-t border-paper/15 lg:border-t-0 lg:border-l lg:pl-8" : ""}`}>
              <span aria-hidden className={`absolute top-[-5px] left-0 h-[9px] w-[9px] bg-signal ${i ? "lg:left-[-5px]" : ""}`} />
              <dt className="text-[22px] leading-[1.2] font-light tracking-[-0.015em] lg:text-[24px]">{h}</dt>
              <dd className="mt-4 text-[15.5px] leading-[1.55] text-paper/65">{t}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-16 grid grid-cols-1 items-end gap-y-10 border-t border-paper/15 pt-14 lg:mt-20 lg:grid-cols-12 lg:gap-x-10 lg:pt-20">
          <blockquote className="text-[28px] leading-[1.15] font-light tracking-[-0.025em] lg:col-span-8 lg:text-[44px]">“You’re dealing with a white-collar team in a blue-collar business.”</blockquote>
          <div className="lg:col-span-3 lg:col-start-10 lg:justify-self-end"><QuoteButton dark /></div>
        </div>
      </div>
    </section>
  );
}
