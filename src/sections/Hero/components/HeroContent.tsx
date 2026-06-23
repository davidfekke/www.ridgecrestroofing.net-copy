export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
      <p className="text-orange-600 text-[13.44px] font-bold box-border caret-transparent tracking-[0.9408px] outline-[3px] uppercase">
        Jacksonville, FL &amp; St. Marys, GA Roof Experts
      </p>
      <h1 className="text-sky-950 text-[44.8px] font-bold box-border caret-transparent tracking-[0.896px] leading-[42.56px] outline-[3px] mt-3 font-bebas_neue md:text-[79.36px] md:tracking-[1.5872px] md:leading-[75.392px]">
        Reroofed Right.
        <span className="text-cyan-800 text-[44.8px] box-border caret-transparent block tracking-[0.896px] leading-[42.56px] outline-[3px] md:text-[79.36px] md:tracking-[1.5872px] md:leading-[75.392px]">
          Storm-Ready. Picture-Perfect.
        </span>
      </h1>
      <p className="text-[17.28px] box-border caret-transparent leading-[27.648px] max-w-[641.899px] outline-[3px] mt-5">
        RidgeCrest Roofing upgrades aging roofs into high-performance systems
        for Jacksonville and the St. Marys area — engineered for ultimate storm
        protection.
      </p>
      <div className="box-border caret-transparent gap-x-3 flex flex-wrap outline-[3px] gap-y-3 w-full mt-[26px] md:w-auto">
        <a
          href="#contact"
          className="text-white font-bold items-center bg-[linear-gradient(145deg,rgb(211,92,47),rgb(255,143,88))] shadow-[rgba(211,92,47,0.3)_0px_12px_24px_0px] box-border caret-transparent gap-x-2 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full border px-[19.2px] py-[12.48px] rounded-[999px] border-solid border-transparent md:w-auto"
        >
          Book Free Inspection
        </a>
        <a
          href="#projects"
          className="text-sky-950 font-bold items-center bg-white/80 box-border caret-transparent gap-x-2 flex justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full border border-sky-950/20 px-[19.2px] py-[12.48px] rounded-[999px] border-solid md:w-auto"
        >
          See Our Work
        </a>
      </div>
      <ul className="box-border caret-transparent gap-x-3.5 flex flex-wrap list-none outline-[3px] gap-y-3.5 mt-6 pl-0">
        <li className="text-[14.4px] font-medium bg-white/70 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-sky-950/20 px-3 py-2 rounded-[999px] border-solid">
          Licensed and Insured
        </li>
        <li className="text-[14.4px] font-medium bg-white/70 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-sky-950/20 px-3 py-2 rounded-[999px] border-solid">
          25-Year Material Warranty
        </li>
        <li className="text-[14.4px] font-medium bg-white/70 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-sky-950/20 px-3 py-2 rounded-[999px] border-solid">
          Fast 24-Hour Turnaround
        </li>
      </ul>
    </div>
  );
};
