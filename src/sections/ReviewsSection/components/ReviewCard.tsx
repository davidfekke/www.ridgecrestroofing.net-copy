export type ReviewCardProps = {
  review: string;
  author: string;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <blockquote className="text-[16.64px] bg-white/80 box-border caret-transparent leading-[28.288px] min-h-[auto] min-w-[auto] outline-[3px] border border-stone-300 p-[26px] rounded-3xl border-solid">
      &quot;{props.review}&quot;
      <cite className="text-cyan-900 font-bold box-border caret-transparent block outline-[3px] mt-3">
        {props.author}
      </cite>
    </blockquote>
  );
};
