import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setToggle(!toggle);
  const closeNav = () => setToggle(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-5 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/#"
          className="group flex items-center gap-2 font-bold text-xl md:text-2xl text-white tracking-tight"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white font-mono text-base shadow-glow group-hover:scale-105 transition-transform duration-300">
            &lt;/&gt;
          </span>
          <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent group-hover:to-cyan-400 transition-colors">
            Omar<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          <a
            href="#about"
            className="text-slate-300 hover:text-white px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-slate-300 hover:text-white px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-slate-300 hover:text-white px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-slate-300 hover:text-white px-4 py-1.5 text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* CTA Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1yiGuPEDNnq86erFAmyuqhRyQFJPG4GHK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-300 shadow-glow hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <FiDownload className="text-base group-hover:animate-bounce" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={handleToggle}
          aria-label="Toggle Navigation Menu"
          className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white md:hidden focus:outline-none"
        >
          {toggle ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[60px] p-5 transition-all duration-300 md:hidden ${toggle
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
          <a
            href="#about"
            onClick={closeNav}
            className="text-slate-300 hover:text-indigo-400 font-medium py-2 border-b border-white/5 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={closeNav}
            className="text-slate-300 hover:text-indigo-400 font-medium py-2 border-b border-white/5 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={closeNav}
            className="text-slate-300 hover:text-indigo-400 font-medium py-2 border-b border-white/5 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeNav}
            className="text-slate-300 hover:text-indigo-400 font-medium py-2 border-b border-white/5 transition-colors"
          >
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1yiGuPEDNnq86erFAmyuqhRyQFJPG4GHK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={closeNav}
            className="flex items-center justify-center gap-2 mt-2 py-3 px-4 rounded-xl bg-indigo-600 text-white font-semibold shadow-glow"
          >
            <FiDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
