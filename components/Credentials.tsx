import { H2, QuoteButton, TextLink } from "./ui";
const rows = [
  ["Liability insurance", "$5M per occurrence, Intact Insurance"],
  ["WCB Alberta", "Account in good standing, clearance letter available"],
  ["COR safety certification", "In progress, audit booked for early 2027"],
  ["Warranty", "12 months on parts and labour"],
  ["24/7 response", "On site within 4 hours inside Calgary city limits"],
  ["Technicians", "10 full-time door technicians"],
  ["Legal name", "BLK BOX Maintenance Inc., Alberta corporation no. 2025602950"],
  ["Manufacturer authorizations and memberships", "Factory-trained on the major overhead door and operator lines"],
  ["Certificate of insurance", "Available on request, same business day"],
  ["GST/HST number", "78412 3956 RT0001"],
];
export default function Credentials() {
  return (
    <section id="credentials" aria-labelledby="cred-h" className="border-t border-rule bg-[#ece9e2]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-y-12 px-5 py-24 lg:grid-cols-12 lg:gap-x-10 lg:px-10 lg:py-36">
        <div className="lg:col-span-5 lg:flex lg:flex-col">
          <div className="lg:flex lg:flex-1 lg:flex-col">
            <H2 id="cred-h">Credentials for your vendor file, in one place</H2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.6] text-graphite lg:text-[17px]">Approving a new contractor means checking insurance, WCB and safety before the first job. Each item below is something you can verify, and we’ll send the documents for your file.</p>
            <div className="mt-9 flex flex-col items-start gap-6">
              <QuoteButton label="Request our vendor package" href="/vendor-information/#package" />
              <TextLink href="/vendor-information/">Vendor and credential information</TextLink>
            </div>
            <figure aria-label="Blk Box Maintenance vendor package preview" className="mt-12 hidden w-[240px] lg:mt-auto lg:block lg:pt-12">
              <div className="relative aspect-[8.5/11] bg-ink p-5 text-paper">
                <img src="/images/blk-box-logo-white.png" alt="" className="h-[26px] w-auto" />
                <span aria-hidden className="absolute top-6 right-6 h-[9px] w-[9px] bg-signal" />
                <p className="absolute right-6 bottom-[84px] left-6 text-[22px] leading-[1.05] font-light tracking-[-0.02em]">Vendor package</p>
                <ul className="absolute right-6 bottom-6 left-6 border-t border-paper/25 pt-3 text-[14px] leading-[1.5] text-paper/65"><li>Insurance · WCB</li><li>Warranty · 2026</li></ul>
              </div>
              <figcaption className="mt-3 text-[14px] text-mute">Sent as one PDF for your vendor file.</figcaption>
            </figure>
          </div>
        </div>
        <dl className="border-t border-ink lg:col-span-6 lg:col-start-7">
          {rows.map(([l, v]) => (
            <div key={l} className="grid grid-cols-1 gap-1 border-b border-[#d3cec3] py-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8 lg:py-6">
              <dt className="flex items-baseline gap-3 text-[14px] text-mute lg:text-[15px]">{l}</dt>
              <dd className="text-[17px] leading-[1.45] text-ink lg:pl-0 lg:text-[18px]">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
