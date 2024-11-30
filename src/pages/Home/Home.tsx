import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Home.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="min-w-[300px] w-full max-w-[1197px] mx-[105px] px-[61px] mt-[102px]">
        <div className="home-container">
          <LandingProfile />
          <LandingContent />
        </div>
      </div>
      <div className="min-w-[300px] w-full max-w-[1326px] px-[105px]">
        <HomeEndLine />
      </div>
    </>
  );
}

function LandingContent() {
  return (
    <main className="w-[64%]">
      <h1>FRONT END DEVELOPER</h1>
      <CyberSeparator1 />
      <h6 className="mt-2">BASTIAN OSSANDON RIVERA</h6>
      <p>
        I design and program web and multi-platform solutions, with emphasis on
        UX/UI.
      </p>
      <GlitchButton text="< bastianossandon1@gmail.com />" />
    </main>
  );
}

function CyberSeparator1() {
  return (
    <div className="w-full h-auto mt-2 opacity-30">
      <div className="w-full h-auto flex flex-row items-center justify-center gap-[1px]">
        <div className="w-full h-[2px] bg-white"></div>
        <div className="w-[15px] h-[6px] bg-white"></div>
      </div>
    </div>
  );
}

function GlitchButton({ text }: { text: string }) {
  return (
    <div className="mt-[59px]">
        <span className="inconsolata text-[24px] font-semibold tracking-[2px] block">
          CLICK HERE:
        </span>
      <a href="mailto:bastianossandon1@gmail.com" className="button-49" role="button">
        {text}
      </a>
    </div>
  );
}

function HomeEndLine() {
  return (
    <div className="w-full mt-[81px] opacity-80 flex flex-col items-center">
      <div className="w-full h-auto flex flex-row items-center justify-between">
        <span className="text-white font-[Inconsolata] font-bold text-[24px] tracking-[5px]">
          HOME
        </span>
        <div className="w-2 h-2 bg-white pr-[1px]"></div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
    </div>
  );
}


function LandingProfile() {
    const [index, setIndex] = useState(0);
    const [isBlurred, setIsBlurred] = useState(false);
    const thingsToSay = useMemo(
      () => ["RESPONSIVENESS", "ACCESIBILITY", "USABILITY", "PERFORMANCE"],
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
      <section className="w-[31%] flex flex-col items-center px-[58px] gap-y-[16px] justify-start">
        <div className="w-full h-[230px] bg-pink-400"></div>
        <div className="w-full py-[23px] px-[8px] flex justify-center items-center text-center border-2 border-white border-opacity-50">
          <button
            className="opacity-50 hover:opacity-100 w-[15%]"
            onClick={() => handleManualChange("left")}
          >
            <AiOutlineLeft size={30} color="white" />
          </button>
          <span
            className={`inconsolata w-[70%] font-[400] tracking-wide opacity-70 transition-all duration-500 ${
              isBlurred ? "blurry-text" : "blurry-in"
            }`}
          >
            {thingsToSay[index]}
          </span>
          <button
            className="opacity-50 hover:opacity-100 w-[15%]"
            onClick={() => handleManualChange("right")}
          >
            <AiOutlineRight size={30} color="white" />
          </button>
        </div>
      </section>
    );
  }