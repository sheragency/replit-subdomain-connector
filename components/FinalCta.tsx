import { QuoteButton } from "./ui";
export default function FinalCta() {
  return (
    <section aria-labelledby="cta-h" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-16 lg:px-10 lg:pt-36 lg:pb-20">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <h2 id="cta-h" className="text-[40px] leading-[1.02] font-light tracking-[-0.035em] lg:col-span-8 lg:text-[80px] lg:leading-[0.98]">Add a door contractor you won’t have to chase</h2>
          <div className="lg:col-span-4 lg:self-end">
            <p className="text-[16px] leading-[1.6] text-paper/70 lg:text-[17px]">Planning work or building your vendor list? Request a quote. Door down right now? Call, and the on-call technician picks it up.</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <QuoteButton dark />
              <a href="tel:+15873511844" className="inline-flex h-[52px] items-center border border-paper/40 px-6 text-[15px] font-medium hover:border-paper">Door down? Call 24/7 (587) 351-1844</a>
            </div>
          </div>
        </div>
        <ul className="mt-16 grid grid-cols-1 gap-y-3 border-t border-paper/20 pt-6 text-[14px] text-paper/65 lg:mt-28 lg:flex lg:flex-wrap lg:gap-x-10">
          <li><a href="/vendor-information/#package" className="text-paper underline decoration-paper/35 underline-offset-4">Request our vendor package</a></li>
          <li>Office: Mon–Sun, 7am–5pm</li><li>Emergencies: 24/7</li>
          <li>Serving Calgary, Airdrie, Chestermere, Cochrane and Okotoks</li>
          <li>Bay 4, 3615 61 Avenue SE, Calgary, AB T2C 1Z4</li>
        </ul>
      </div>
    </section>
  );
}
