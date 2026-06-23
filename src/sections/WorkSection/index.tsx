import { SectionHeader } from "@/components/SectionHeader";
import { WorkGallery } from "@/sections/WorkSection/components/WorkGallery";

export const WorkSection = () => {
  return (
    <section
      id="projects"
      className="box-border caret-transparent outline-[3px] w-[345px] mx-auto py-[72px] md:w-[1120px]"
    >
      <SectionHeader label="Our Work" title="The RidgeCrest Standard." />
      <WorkGallery />
    </section>
  );
};
