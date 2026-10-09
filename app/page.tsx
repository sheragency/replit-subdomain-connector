import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Managers from "@/components/Managers";
import Buildings from "@/components/Buildings";
import Credentials from "@/components/Credentials";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.addEventListener('DOMContentLoaded',function(){var s=document.querySelector('[data-sticky-call]'),t=document.getElementById('hero-call');if(!s||!t||!('IntersectionObserver' in window))return;new IntersectionObserver(function(e){var v=e[0].isIntersecting||e[0].boundingClientRect.top>0;s.style.opacity=v?'0':'1';s.style.pointerEvents=v?'none':'auto';s.setAttribute('aria-hidden',v?'true':'false')}).observe(t)})" }} />
      <script dangerouslySetInnerHTML={{ __html: "if(location.search.indexOf('still')>-1)document.documentElement.classList.add('still')" }} />
      <SiteNav />
      <Hero />
      <TrustStrip />
      <Services />
      <Managers />
      <Buildings />
      <Credentials />
      <Process />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
