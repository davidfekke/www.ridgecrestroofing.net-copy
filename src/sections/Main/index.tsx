import { Hero } from "@/sections/Hero";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { WorkSection } from "@/sections/WorkSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { ContactSection } from "@/sections/ContactSection";

export const Main = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
};
