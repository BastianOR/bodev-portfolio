function GlitchButton({ text, title }: { text: string; title: string }) {
  return (
    <div className="mt-[48px] lg:mt-[48px] hidden xs:block">
      {title.length > 1 && (
        <span className="inconsolata text-[27px] mb-2 border-b border-opacity-50 border-white w-fit font-bold tracking-[2px] block">
          {title}
        </span>
      )}

      <a
        href="mailto:bastianossandon1@gmail.com"
        className="button-49"
        role="button"
      >
        {text}
      </a>
    </div>
  );
}

export default GlitchButton;
