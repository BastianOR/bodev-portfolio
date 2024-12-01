import "./navbar.css";

export default function Navbar() {
  return (
    <div className="min-w-[300px] mt-[32px] w-full max-w-[1197px]">
      <section className="mx-[61px] flex justify-between items-center inconsolata text-[20px] font-semibold">
        <div aria-description="Language/Idioma" className="flex gap-2">
          <button className="text-black bg-white px-[1px]">EN</button>
          <span className="font-normal mb-[2px]">|</span>
          <button>ES</button>
        </div>
        <nav className="navbar">
          <a href="">01. About</a>
          <span>/</span>
          <a href="">02. Portfolio</a>
          <span>/</span>
          <a href="">03. Contact</a>
          <span>/</span>
          <a target="_blank" href="https://github.com/BastianOR">04. GitHub</a>
        </nav>
      </section>
    </div>
  );
}
