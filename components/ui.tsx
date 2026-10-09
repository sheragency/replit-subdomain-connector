export function QuoteButton({ dark = false, label = "Request a quote", href = "/contact-us/#quote" }: { dark?: boolean; label?: string; href?: string }) {
  return (
    <a href={href} className={`group inline-flex h-[52px] items-stretch text-[15px] font-medium ${dark ? "bg-paper text-ink" : "bg-ink text-paper"}`}>
      <span className="flex items-center px-6">{label}</span>
      <span aria-hidden className="flex w-[52px] items-center justify-center bg-signal text-white"><span className="arrow">→</span></span>
    </a>
  );
}
export function TextLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return <a href={href} className={`group inline-flex items-baseline gap-2 text-[15px] underline underline-offset-[6px] ${dark ? "text-paper decoration-paper/35 hover:decoration-paper" : "text-ink decoration-ink/35 hover:decoration-ink"}`}>{children}<span aria-hidden className="arrow no-underline">→</span></a>;
}
export function H2({ children, id, dark = false, className = "" }: { children: React.ReactNode; id: string; dark?: boolean; className?: string }) {
  return <h2 id={id} className={`text-[34px] leading-[1.06] font-light tracking-[-0.03em] lg:text-[56px] lg:leading-[1.02] ${dark ? "text-paper" : "text-ink"} ${className}`}>{children}</h2>;
}
export const Sq = ({ c = "bg-ink", s = 9 }: { c?: string; s?: number }) => <span aria-hidden className={`inline-block shrink-0 ${c}`} style={{ width: s, height: s }} />;
export const Call = ({ children = "(587) 351-1844", className = "" }: { children?: React.ReactNode; className?: string }) => <a href="tel:+15873511844" className={`underline underline-offset-4 ${className}`}>{children}</a>;
