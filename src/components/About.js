import React from "react";
import AboutImg from "../assets/about-img.png";
import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import { FiCheckCircle, FiCpu, FiCode, FiLayers, FiCompass } from "react-icons/fi";

const skillCategories = [
  {
    title: "Core Frontend",
    icon: <FiCode className="text-indigo-400" />,
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" />, level: "Advanced" },
      { name: "Angular", icon: <SiAngular className="text-red-500" />, level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" />, level: "Advanced" },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" />, level: "Proficient" },
      { name: "HTML5 & Semantic", icon: <SiHtml5 className="text-orange-500" />, level: "Mastered" },
    ],
  },
  {
    title: "Styling & UI Systems",
    icon: <FiLayers className="text-cyan-400" />,
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Advanced" },
      { name: "CSS3 & Modern Layouts", icon: <SiCss3 className="text-blue-500" />, level: "Mastered" },
      { name: "Sass / SCSS", icon: <SiSass className="text-pink-400" />, level: "Proficient" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400" />, level: "Proficient" },
      { name: "Responsive Design", icon: <FiCheckCircle className="text-emerald-400" />, level: "Advanced" },
    ],
  },
  {
    title: "Backend & Database",
    icon: <FiCpu className="text-purple-400" />,
    skills: [
      { name: ".NET / .NET Core", icon: <SiDotnet className="text-purple-400" />, level: "Advanced" },
      { name: "C#", icon: <SiCsharp className="text-indigo-400" />, level: "Advanced" },
      { name: "SQL Server / SQL", icon: <SiMicrosoftsqlserver className="text-sky-400" />, level: "Advanced" },
      { name: "RESTful Web APIs", icon: <FiCompass className="text-amber-400" />, level: "Proficient" },
      { name: "Git & Version Control", icon: <SiGit className="text-orange-500" />, level: "Advanced" },
    ],
  },
];

const highlights = [
  {
    title: "Full Stack Architecture",
    desc: "End-to-end engineering connecting responsive frontends to reliable .NET backends and SQL databases.",
  },
  {
    title: "Performance & Scalability",
    desc: "Speed-first development optimized across database queries, secure APIs, and responsive UI screens.",
  },
  {
    title: "Continuous Growth",
    desc: "Always up-to-date with current industry standards, software engineering principles, and clean design.",
  },
];

const About = () => {
  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-white/5" id="about">
      {/* Background ambient lighting */}
      <div className="ambient-glow-indigo top-1/4 right-0 opacity-20"></div>
      <div className="ambient-glow-cyan bottom-10 left-0 opacity-20"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            About & Experience
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Who I Am & What I Build
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Story & Visual */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Bio Description */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 leading-snug">
              Full Stack Developer focused on building reliable, scalable, and intuitive end-to-end web products.
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              Hello! I'm <strong className="text-white">Omar Mohamed</strong>. I specialize in turning complex 
              system requirements and designs into high-performance, full-stack digital solutions. 
              With hands-on experience spanning modern frontends (<span className="text-indigo-400 font-medium">React.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Angular</span>) and robust backends (<span className="text-purple-400 font-medium">.NET Core</span>,{" "}
              <span className="text-sky-400 font-medium">C#</span>, and <span className="text-emerald-400 font-medium">SQL Server</span>), 
              I build scalable applications from database architecture to user interface.
            </p>

            <p className="text-slate-400 leading-relaxed text-base">
              On the backend, I leverage <span className="text-purple-400 font-medium">.NET</span> and <span className="text-sky-400 font-medium">SQL</span> to architect secure REST APIs, optimize relational database queries, and deliver high-throughput services. I believe great software is where robust engineering meets intuitive user experience.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="glass-card p-4 rounded-2xl">
                  <FiCheckCircle className="text-indigo-400 text-xl mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Image Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative glass-card rounded-3xl p-6 border border-white/10 text-center">
                <img
                  src={AboutImg}
                  alt="Omar Mohamed working"
                  className="w-full max-w-[280px] mx-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <div className="mt-4 pt-4 border-t border-white/10 text-left">
                  <p className="text-xs text-slate-400">Location & Availability</p>
                  <p className="text-sm font-semibold text-white flex items-center justify-between">
                    <span>Remote / Cairo, Egypt</span>
                    <span className="text-emerald-400 text-xs flex items-center gap-1">● Ready to start</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section Anchor */}
        <div id="skills" className="pt-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Technical Arsenal
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white">
              Skills & Technologies
            </h3>
            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-lg mx-auto">
              Modern full-stack technologies and frameworks I use to build production-grade web systems.
            </p>
          </div>

          {/* Skill Cards Columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                    <span className="text-2xl p-2.5 rounded-xl bg-slate-800/80 border border-white/5">
                      {cat.icon}
                    </span>
                    <h4 className="text-lg font-bold text-white">{cat.title}</h4>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 hover:border-indigo-500/30 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </span>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 group-hover:text-indigo-300">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
