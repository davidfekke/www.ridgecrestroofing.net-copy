export type SectionHeaderProps = {
  label: string;
  title: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <p className="text-orange-600 text-[13.44px] font-bold box-border caret-transparent tracking-[0.9408px] outline-[3px] uppercase">
        {props.label}
      </p>
      <h2 className="text-sky-950 text-[32px] font-bold box-border caret-transparent tracking-[0.96px] outline-[3px] mt-2.5 font-bebas_neue md:text-[51.2px] md:tracking-[1.536px]">
        {props.title}
      </h2>
    </div>
  );
};
