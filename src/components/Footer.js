import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070A11] border-t border-white/5 text-slate-400 py-12">
      <div className="container mx-auto px-5 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <a href="/#" className="flex items-center gap-2 font-bold text-lg text-white">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono text-xs">
              &lt;/&gt;
            </span>
            <span>Omar<span className="text-indigo-400">.dev</span></span>
          </a>
          <p className="text-xs text-slate-500 mt-1">
            &copy; {currentYear} Omar Mohamed. All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/1JCVrQ42PowtAoD0pu6xlnQzK79DHlrfM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/omar-sameh-diab/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
          >
            <AiOutlineLinkedin size={18} />
          </a>
          <a
            href="https://github.com/omarnero"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
          >
            <AiOutlineGithub size={18} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008353174235"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
          >
            <AiOutlineFacebook size={18} />
          </a>
          <a
            href="mailto:omar.samch.diab@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition-all"
          >
            <AiOutlineMail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            aria-label="Back to top"
            className="w-9 h-9 ml-2 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
