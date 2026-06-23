export const HeaderLogo = () => {
  return (
    <a
      href="#home"
      aria-label="RidgeCrest Roofing home"
      className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3"
    >
      <img
        src="https://c.animaapp.com/mqq6fwidBfIC09/assets/ridgecrestroofinglogo.svg"
        alt="RidgeCrest Roofing logo"
        className="box-border caret-transparent shrink-0 h-12 min-h-[auto] min-w-[auto] object-contain outline-[3px] align-baseline w-12"
        style={{ colorScheme: "light" }}
      />
      <span className="text-[19.2px] box-border caret-transparent block tracking-[0.768px] min-h-[auto] min-w-[auto] outline-[3px] font-bebas_neue md:text-[23.2px] md:tracking-[0.928px]">
        RidgeCrest Roofing
      </span>
    </a>
  );
};
