import { IoMdPerson } from "react-icons/io";
import { IoIosCopy } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function MobileNavbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={`${isNavOpen ? " h-[318px] " : " h-[60px] "} gap-2 xxs:h-[60px] overflow-hidden transition-all duration-500 ease-in-out fixed top-0 bg-[var(--mobile-menu-bg)] w-full py-2 px-[5vw] z-30 xmd:hidden flex flex-col items-center`}>


      {/* Navigation Top, HStack */}
      <section className="w-full flex flex-row items-center justify-between inconsolata text-[20px]">


        {/* Left side, HStacked */}
        <div aria-description="Language/Idioma" className="flex gap-2">
          <button className="py-2 px-3 font-semibold text-black bg-white">
            EN
          </button>
          <span className="font-thin text-4xl">|</span>
          <button className="py-2 px-3 font-semibold ">ES</button>
        </div>

        {/* Right side, HStacked */}
        <div className="flex gap-0 xxs:gap-8">
            <a className="hidden xxs:inline" href=""><IoMdPerson size={32} /></a>
            <a className="hidden xxs:inline" href=""><IoIosCopy size={32} /></a>
            <a className="hidden xxs:inline" href=""><FaPhone size={28} /></a>
            <a className="hidden xxs:inline" target="_blank" href="https://github.com/BastianOR"><FaGithub size={32} /></a>
            <button className="xxs:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
              <GiHamburgerMenu size={32} />
            </button>
        </div>
      </section>

      {/* Navigation Menu at the bottom, VStack */}
      <nav className={`h-[248px] overflow-hidden flex xxs:h-0 flex-col w-full items-center inconsolata text-[20px]`}>
        <a className="py-4 hover:bg-[#ffffff17] w-full text-center" href="">About</a>
        <a className="py-4 hover:bg-[#ffffff17] w-full text-center" href="">Portfolio</a>
        <a className="py-4 hover:bg-[#ffffff17] w-full text-center" href="">Contact me</a>
        <a className="py-4 hover:bg-[#ffffff17] w-full text-center" href="https://github.com/BastianOR" target="_blank">GitHub</a>
      </nav>

    </div>
  );
}
