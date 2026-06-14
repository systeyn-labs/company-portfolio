import About from "@/components/landing/About";
import CapabilitiesJourney from "@/components/landing/CapabilitiesMatrix";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/Faq";
import Hero from "@/components/landing/Hero";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import WhyUs from "@/components/landing/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Hero />
        <CapabilitiesJourney />
        {/* <Portfolio /> */}
        <WhyUs />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
    </>
  );
}
