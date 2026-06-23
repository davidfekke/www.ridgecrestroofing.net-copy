export type BackgroundDecorProps = {
  variantClassName: string;
};

export const BackgroundDecor = (props: BackgroundDecorProps) => {
  return (
    <div
      className={`fixed box-border caret-transparent blur-[65px] h-[520px] opacity-[0.28] outline-[3px] w-[520px] z-[-1] rounded-[50%] ${props.variantClassName}`}
    ></div>
  );
};
