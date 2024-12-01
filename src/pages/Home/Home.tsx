import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import GlitchButton from "../../components/glitchbutton/glitch-button";
import CyberSeparator1 from "../../components/cyberseparator1/cyber-separator1";
import SectionEndLine from "../../components/section-endline/section-endline";

export default function Home() {
  return (
    <>
      <div className="min-w-[300px] w-full max-w-[1197px] mx-[105px] px-4 md:px-8 lg:px-[61px] mt-[102px]">
        <div className="home-container">
          <LandingProfile />
          <LandingContent />
        </div>
      </div>
      <div className="min-w-[300px] w-full max-w-[1326px] px-4 md:px-8 lg:px-[61px] xl:px-[105px]">
        <SectionEndLine section="home" />
      </div>
    </>
  );
}

function LandingContent() {
  return (
    <main className="px-0 xs:px-6 md:px-0 w-full md:w-[624px] lg:w-[64%]">
      <h1 className="text-center xs:text-left text-4xl xxs:text-[35px] xs:text-[37px] lg:text-[36px]">
        FRONT END <span className="developer-word">DEVELOPER</span>
      </h1>
      <CyberSeparator1 />
      <h6 className="mt-1 xxs:mt-2 text-center xs:text-left">
        BASTIAN OSSANDON RIVERA
      </h6>
      <p>
        I design and program web and multi-platform solutions, with emphasis on
        UX/UI.
      </p>
      <AlternativeEmailButton />
      <GlitchButton
        title="Get in touch"
        text="< bastianossandon1@gmail.com />"
      />
    </main>
  );
}

function LandingProfile() {
  const [index, setIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);
  const thingsToSay = useMemo(
    () => ["DESIGN", "UX/UI", "FRONTEND", "RESPONSIVE", "MOBILE", "DATABASE"],
    []
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIsBlurred(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % thingsToSay.length);
      }, 50);
    }, 6000);
  }, [setIsBlurred, setIndex, thingsToSay]);

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval, thingsToSay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [index]);

  const handleManualChange = (direction: string) => {
    setIsBlurred(true);
    setTimeout(() => {
      setIndex((prevIndex) =>
        direction === "left"
          ? (prevIndex - 1 + thingsToSay.length) % thingsToSay.length
          : (prevIndex + 1) % thingsToSay.length
      );
      startInterval();
    }, 50);
  };

  return (
    <section className="landingprofile">
      <div className="w-full h-[230px] border-4 border-white border-opacity-50"></div>
      <div className="hidden w-full py-[20px] px-0 md:px-[8px] lg:flex justify-between md:justify-center items-center text-center border-2 border-white border-opacity-50">
        <button
          className="opacity-50 hover:opacity-100 w-[30px]"
          onClick={() => handleManualChange("left")}
        >
          <AiOutlineLeft size={28} color="white" />
        </button>
        <span
          className={`inconsolata w-[117px] font-[400] tracking-wide opacity-70 transition-all duration-500 ${
            isBlurred ? "blurry-text" : "blurry-in"
          }`}
        >
          {thingsToSay[index]}
        </span>
        <button
          className="opacity-50 hover:opacity-100 w-[30px]"
          onClick={() => handleManualChange("right")}
        >
          <AiOutlineRight size={28} color="white" />
        </button>
      </div>
    </section>
  );
}

function AlternativeEmailButton() {
  return (
    <div className="mt-[48px] w-full flex justify-center xs:hidden">
      <a
        href="mailto:bastianossandon1@gmail.com"
        className="min-w-[200px] w-[80%] max-w-[270px] py-4 px-2 border-t-2 border-b-2 text-white hover:text-opacity-70 border-white inconsolata text-3xl text-center"
      >
        Write me!
      </a>
    </div>
  );
}