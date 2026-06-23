const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const headerHeight = 84;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
};

export const HeaderNav = () => {
  return (
    <nav
      aria-label="Main navigation"
      className="box-border caret-transparent gap-x-5 hidden min-h-0 min-w-0 outline-[3px] gap-y-5 md:flex md:min-h-[auto] md:min-w-[auto]"
    >
      <a
        href="#services"
        onClick={scrollTo("services")}
        className="text-slate-800 font-medium box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] hover:text-cyan-700 hover:border-cyan-700"
      >
        Services
      </a>
      <a
        href="#projects"
        onClick={scrollTo("projects")}
        className="text-slate-800 font-medium box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] hover:text-cyan-700 hover:border-cyan-700"
      >
        Our Work
      </a>
      <a
        href="#process"
        onClick={scrollTo("process")}
        className="text-slate-800 font-medium box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] hover:text-cyan-700 hover:border-cyan-700"
      >
        Process
      </a>
      <a
        href="#testimonials"
        onClick={scrollTo("testimonials")}
        className="text-slate-800 font-medium box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] hover:text-cyan-700 hover:border-cyan-700"
      >
        Reviews
      </a>
      <a
        href="#contact"
        onClick={scrollTo("contact")}
        className="text-slate-800 font-medium box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto] hover:text-cyan-700 hover:border-cyan-700"
      >
        Contact
      </a>
    </nav>
  );
};
