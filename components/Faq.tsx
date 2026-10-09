import { H2, QuoteButton } from "./ui";
const qa = [
  ["Do you offer 24/7 emergency commercial door repair in Calgary?", "Yes. Blk Box Maintenance always has one technician on call, day and night, for commercial overhead doors and man doors. Call (587) 351-1844 and tell us what’s broken and where."],
  ["What kinds of doors do you repair?", "Commercial overhead doors (including freight and garage-style doors), entrance doors and man doors, the everyday doors people walk through. Repairs are most of our work."],
  ["Do you install new commercial overhead doors?", "Yes, we install new doors as well as repair them. New buildings don’t go up every week, so most jobs are repairs, but if a door needs replacing, we can quote the install."],
  ["What types of buildings do you work on?", "Commercial buildings: warehouses, commercial plazas and retail, high-rises and office towers, and apartment buildings managed by one property management company."],
  ["Do you work on residential garage doors?", "No. We work on commercial buildings only, so we don’t take jobs on private houses. Managed apartment buildings count as commercial, and we do service those."],
  ["Do you warranty your work?", "Yes. Our work is warrantied, so if a repair we did doesn’t hold, you call us back instead of paying someone new to fix it again. The warranty runs 12 months and covers parts and labour."],
  ["Are you a verified vendor with property management companies?", "Yes. We’re a verified contractor on the internal bidding platforms property management companies use to post commercial jobs, and we bid on work through them."],
  ["What insurance, WCB and safety certifications do you carry?", "Commercial work requires proper insurance, and we can send the documents your vendor file needs. We carry $5M in liability insurance with Intact Insurance, our WCB Alberta account is in good standing, and our COR certification is in progress. Ask for our vendor package and we’ll send them."],
  ["What areas do you serve?", "We’re based in Calgary and service commercial buildings across the city, plus Airdrie, Chestermere, Cochrane and Okotoks."],
  ["How do I request a quote or set up a service account?", "Send a quote request with your building address and what’s wrong, or call (587) 351-1844. To set up a service account, we take your buildings, billing contact and PO rules in one call, and quotes come back within 2 business days."],
];
function Item({ q, a, n, open }: { q: string; a: string; n: number; open?: boolean }) {
  return (
    <details open={open} className="group/f border-b border-rule">
      <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden">
        <span className="w-6 pt-[3px] text-[14px] text-mute tabular-nums">{String(n).padStart(2, "0")}</span>
        <span className="flex-1 text-[17px] leading-[1.4] lg:text-[19px]">{q}</span>
        <span aria-hidden className="relative mt-[6px] h-[14px] w-[14px] shrink-0"><span className="absolute top-[6px] left-0 h-[2px] w-[14px] bg-ink" /><span className="absolute top-0 left-[6px] h-[14px] w-[2px] bg-ink transition-transform group-open/f:scale-y-0" /></span>
      </summary>
      <p className="pr-8 pb-7 pl-11 text-[15.5px] leading-[1.6] text-graphite">{a}</p>
    </details>
  );
}
export default function Faq() {
  return (
    <section aria-labelledby="faq-h" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-40">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10">
        <H2 id="faq-h" className="lg:col-span-8">Questions property managers ask before they add us as a vendor</H2>
        <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
          <p className="text-[16px] leading-[1.6] text-graphite lg:text-[17px]">Short answers on emergencies, door types, warranty and getting set up. Don’t see yours? Call <a href="tel:+15873511844" className="whitespace-nowrap text-ink underline decoration-ink/35 underline-offset-4">(587) 351-1844</a>.</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:mt-20 lg:grid-cols-2 lg:gap-x-10">
        {[0, 5].map((s) => (<div key={s} className="border-t border-ink">{qa.slice(s, s + 5).map(([q, a], i) => <Item key={q} q={q} a={a} n={s + i + 1} open={s + i === 0} />)}</div>))}
      </div>
      <div className="mt-12 lg:mt-16"><QuoteButton /></div>
    </section>
  );
}
