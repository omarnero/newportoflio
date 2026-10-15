import React from "react";
import HeroImg from "../assets/hero-img.png";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FiArrowUpRight, FiCode } from "react-icons/fi";
import { SiReact, SiDotnet, SiMicrosoftsqlserver } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#0B0F19] bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="ambient-glow-indigo top-10 -left-20 animate-pulse-slow"></div>
      <div className="ambient-glow-cyan bottom-10 -right-20 animate-pulse-slow"></div>
      <div className="ambient-glow-violet top-1/2 left-1/3 opacity-30"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 text-xs md:text-sm font-medium text-slate-300 backdrop-blur-md mb-6 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack Roles & Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Hi, I'm <span className="gradient-accent">Omar Mohamed</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-200 font-bold block mt-2">
                Full Stack Developer
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              Passionate about building scalable, high-performance web
              applications from database architecture to intuitive user
              interfaces. Proficient in{" "}
              <span className="text-indigo-400 font-semibold">React.js</span>,{" "}
              <span className="text-cyan-400 font-semibold">Angular</span>,{" "}
              <span className="text-purple-400 font-semibold">.NET</span>, and{" "}
              <span className="text-sky-400 font-semibold">SQL</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-glow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Icons row & Quick Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/omar-sameh-diab/"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-200"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <AiOutlineLinkedin size={22} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/omarnero"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-200"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <AiOutlineGithub size={22} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100008353174235"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-200"
                  title="Facebook Profile"
                  aria-label="Facebook"
                >
                  <AiOutlineFacebook size={22} />
                </a>
                <a
                  href="mailto:omar.samch.diab@gmail.com"
                  className="w-11 h-11 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:bg-slate-800 hover:-translate-y-1 transition-all duration-200"
                  title="Direct Email"
                  aria-label="Email"
                >
                  <AiOutlineMail size={22} />
                </a>
              </div>

              <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

              {/* Quick mini-stats */}
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <span className="font-bold text-white text-base">6+</span>
                  <p className="text-slate-400 text-xs">Featured Apps</p>
                </div>
                <div>
                  <span className="font-bold text-indigo-400 text-base">
                    Full Stack
                  </span>
                  <p className="text-slate-400 text-xs">Architecture</p>
                </div>
                <div>
                  <span className="font-bold text-emerald-400 text-base">
                    100%
                  </span>
                  <p className="text-slate-400 text-xs">Commitment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-2xl animate-pulse-slow"></div>

              {/* Main Illustration Card */}
              <div className="relative rounded-3xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <FiCode className="text-indigo-400" /> fullstack.cs
                  </span>
                </div>

                <div className="relative flex justify-center py-4">
                  <img
                    src={HeroImg}
                    alt="Omar Mohamed - Full Stack Developer"
                    className="w-full max-w-[320px] object-contain drop-shadow-2xl animate-float"
                  />
                </div>

                {/* Floating Micro Badge 1 */}
                <div
                  className="absolute -left-4 top-1/4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-card border border-white/10 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <SiReact
                    className="text-cyan-400 text-xl animate-spin"
                    style={{ animationDuration: "10s" }}
                  />
                  <div>
                    <p className="text-xs font-bold text-white leading-none">
                      React & Angular
                    </p>
                    <p className="text-[10px] text-slate-400">Client-Side UI</p>
                  </div>
                </div>

                {/* Floating Micro Badge 2 */}
                <div
                  className="absolute -right-4 bottom-1/4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-card border border-white/10 animate-float"
                  style={{ animationDelay: "2.5s" }}
                >
                  <SiDotnet className="text-purple-400 text-xl" />
                  <div>
                    <p className="text-xs font-bold text-white leading-none">
                      .NET & SQL
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Backend & Database
                    </p>
                  </div>
                </div>

                {/* Tech Pills under card */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-around text-slate-400 text-xs">
                  <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                    <SiReact className="text-cyan-400" /> React
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                    <SiDotnet className="text-purple-400" /> .NET
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                    <SiMicrosoftsqlserver className="text-sky-400" /> SQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
