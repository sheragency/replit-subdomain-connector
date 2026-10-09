import { H2 } from "./ui";
const tiles = [
  ["Warehouses", "/images/bld-warehouse.jpg", "warehouse", "50% 78%"],
  ["Commercial plazas and retail", "/images/bld-retail.jpg", "commercial plaza", "40% 50%"],
  ["Managed apartment buildings", "/images/bld-apartments.jpg", "managed apartment building", "50% 40%"],
  ["High-rises and office towers", "/images/bld-tower.jpg", "office tower", "45% 50%"],
];
export default function Buildings() {
  return (
    <section aria-labelledby="bld-h" className="mx-auto max-w-[1440px] px-5 py-24 lg:px-10 lg:py-40">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-10">
        <H2 id="bld-h" className="lg:col-span-6">Warehouses, plazas, apartments and towers</H2>
        <p className="text-[16px] leading-[1.6] text-graphite lg:col-span-4 lg:col-start-9 lg:self-end lg:text-[17px]">If one company manages the building, it’s our kind of job. Commercial only. We don’t do residential homes.</p>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 lg:mt-20 lg:grid-cols-4 lg:gap-x-4">
        {tiles.map(([l, src, a, pos], i) => (
          <li key={l} className={i % 2 ? "lg:mt-16" : ""}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-rule"><img src={src} alt={`Blk Box Maintenance commercial door work at a ${a}`} className="absolute inset-0 h-full w-full object-cover brightness-[1.02] saturate-[0.78] sepia-[0.08]" style={{ objectPosition: pos }} /></div>
            <p className="mt-4 border-t border-ink pt-3 text-[15px] leading-[1.35] lg:text-[17px]">{l}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
