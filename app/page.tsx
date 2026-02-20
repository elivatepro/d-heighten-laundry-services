import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PricingCalculator } from "@/components/sections/pricing-calculator";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { GallerySection } from "@/components/sections/gallery-section";
import { Testimonials } from "@/components/sections/testimonials";
import { CleaningServices } from "@/components/sections/cleaning-services";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ServicesGrid />
      <PricingCalculator />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <CleaningServices />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
