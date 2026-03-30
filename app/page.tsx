import HeroSection from "@/components/sections/HeroSection";
import ImpactBanner from "@/components/sections/ImpactBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import DigitalSection from "@/components/sections/DigitalSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ImpactBanner />
      <ServicesSection />
      <InitiativesSection />
      <CaseStudiesSection />
      <DigitalSection />
      <ContactSection />
    </>
  );
}
