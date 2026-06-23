import { SectionHeader } from "@/components/SectionHeader";
import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSection = () => {
  return (
    <section
      id="process"
      className="bg-[linear-gradient(rgba(15,111,143,0.07),rgba(15,111,143,0)),radial-gradient(circle_at_20%_0%,rgba(211,92,47,0.14),rgba(0,0,0,0)_45%)] bg-size-[auto,auto] box-border caret-transparent outline-[3px] bg-[position:0%,0%_0%,0%] py-[72px]"
    >
      <div className="box-border caret-transparent outline-[3px] w-[345px] mx-auto md:w-[1120px]">
        <SectionHeader
          label="Our Workflow"
          title="From First Call to Final Nail in Three Steps"
        />
        <div className="box-border caret-transparent gap-x-3.5 grid grid-cols-[1fr] outline-[3px] gap-y-3.5 mt-6 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ProcessCard
            step="01"
            title="Inspect"
            description="We get up on your roof and carry out a thorough hands-on inspection of decking, flashing, gutters, and ventilation to give you an honest, accurate assessment."
          />
          <ProcessCard
            step="02"
            title="Reroof"
            description="Old materials out, new waterproofing and shingles in, with clean daily site management."
          />
          <ProcessCard
            step="03"
            title="Protect"
            description="Final quality check, warranty handoff, and maintenance guidance for long roof life."
          />
        </div>
      </div>
    </section>
  );
};
