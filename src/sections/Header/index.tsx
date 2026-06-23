import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderNav } from "@/sections/Header/components/HeaderNav";
import { HeaderCallButton } from "@/sections/Header/components/HeaderCallButton";

export const Header = () => {
  return (
    <header className="sticky backdrop-blur bg-stone-50/80 border-b border-b-gray-800/10 z-20 top-0">
      <div className="flex items-center justify-between gap-2 min-h-[84px] w-full px-4 mx-auto md:gap-4 md:px-8 md:w-[1120px]">
        <HeaderLogo />
        <HeaderNav />
        <HeaderCallButton />
      </div>
    </header>
  );
};
