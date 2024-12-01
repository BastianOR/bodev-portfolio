function SectionEndLine({ section }: { section: string }) {
  return (
    <div className="w-full mt-[81px] opacity-80 flex flex-col items-center">
      <div className="w-full h-auto flex flex-row items-center justify-between">
        <span className="text-white font-[Inconsolata] font-bold text-[24px] tracking-[5px]">
          {section.toUpperCase()}
        </span>
        <div className="w-2 h-2 bg-white pr-[1px]"></div>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
    </div>
  );
}

export default SectionEndLine;