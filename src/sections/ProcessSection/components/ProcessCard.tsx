export type ProcessCardProps = {
  step: string;
  title: string;
  description: string;
};

export const ProcessCard = (props: ProcessCardProps) => {
  return (
    <article className="bg-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 p-[22px] rounded-[20px] border-solid">
      <span className="text-white font-bold items-center bg-cyan-900 box-border caret-transparent inline-grid h-11 justify-items-center outline-[3px] w-11 rounded-[50%]">
        {props.step}
      </span>
      <h3 className="text-cyan-900 text-2xl font-bold box-border caret-transparent outline-[3px] mt-3 font-bebas_neue">
        {props.title}
      </h3>
      <p className="box-border caret-transparent leading-[25.28px] outline-[3px] mt-1.5">
        {props.description}
      </p>
    </article>
  );
};
