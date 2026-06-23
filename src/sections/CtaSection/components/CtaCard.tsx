export const CtaCard = () => {
  return (
    <div className="text-white bg-[linear-gradient(145deg,rgba(16,63,95,0.96),rgba(7,59,90,0.96)),repeating-linear-gradient(-45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_10px,rgba(0,0,0,0)_10px,rgba(0,0,0,0)_20px)] bg-size-[auto,auto] box-border caret-transparent outline-[3px] w-[345px] border bg-[position:0%,0%_0%,0%] mx-auto px-[22px] py-[30px] rounded-[32px] border-solid border-white/40 md:w-[1120px] md:p-11">
      <h2 className="text-[32px] font-bold box-border caret-transparent tracking-[0.96px] outline-[3px] font-bebas_neue md:text-[54.4px] md:tracking-[1.632px]">
        Ready to Reroof Your Home?
      </h2>
      <p className="box-border caret-transparent max-w-[615.362px] outline-[3px] mt-2.5">
        Schedule a free inspection with RidgeCrest Roofing in Jacksonville, FL.
      </p>
      <div className="box-border caret-transparent gap-x-3 flex flex-wrap outline-[3px] gap-y-3 w-full mt-[26px] md:w-auto">
        <a
          href="tel://+19045550199"
          className="font-bold items-center bg-[linear-gradient(145deg,rgb(211,92,47),rgb(255,143,88))] shadow-[rgba(211,92,47,0.3)_0px_12px_24px_0px] box-border caret-transparent gap-x-2 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full border px-[19.2px] py-[12.48px] rounded-[999px] border-solid border-transparent md:w-auto"
        >
          Call Now
        </a>
        <a
          href="mailto://hello@ridgecrestroofing.com"
          className="text-sky-950 font-bold items-center bg-white/80 box-border caret-transparent gap-x-2 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full border border-sky-950/20 px-[19.2px] py-[12.48px] rounded-[999px] border-solid md:w-auto"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};
