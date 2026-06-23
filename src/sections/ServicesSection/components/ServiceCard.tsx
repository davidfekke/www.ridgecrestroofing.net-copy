export type ServiceCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <article className="bg-white/90 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 p-6 rounded-3xl border-solid">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="box-border caret-transparent inline h-[72px] outline-[3px] align-baseline w-[72px]"
      />
      <h3 className="text-cyan-900 text-[25.6px] font-bold box-border caret-transparent tracking-[0.768px] outline-[3px] mt-3 font-bebas_neue">
        {props.title}
      </h3>
      <p className="box-border caret-transparent leading-[25.92px] outline-[3px] mt-2">
        {props.description}
      </p>
    </article>
  );
};
