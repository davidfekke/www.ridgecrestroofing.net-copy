import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="box-border caret-transparent outline-[3px] w-[345px] mx-auto py-[72px] md:w-[1120px]"
    >
      <SectionHeader
        label="What We Do"
        title="Roofing Services for Jacksonville &amp; St. Marys Homes"
      />
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[1fr] outline-[3px] gap-y-4 mt-[26px] md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <ServiceCard
          imageUrl="https://c.animaapp.com/mqq6fwidBfIC09/assets/icon-reroof.svg"
          imageAlt="Inspection icon"
          title="Roof Inspections"
          description="Detailed photo reports and straightforward recommendations, so you know exactly what your roof needs and why."
        />
        <ServiceCard
          imageUrl="https://c.animaapp.com/mqq6fwidBfIC09/assets/icon-leakguard.svg"
          imageAlt="Leak shield icon"
          title="Leak and Storm Repair"
          description="Emergency tarping, flashing repairs, and storm damage restoration to protect your interior from further moisture intrusion."
        />
        <ServiceCard
          imageUrl="https://c.animaapp.com/mqq6fwidBfIC09/assets/icon-reroof.svg"
          imageAlt="Reroof icon"
          title="Complete Reroofs"
          description="Full tear-off and reroofing with premium architectural shingles, precision ridge ventilation, and code-compliant underlayment."
        />
      </div>
    </section>
  );
};
