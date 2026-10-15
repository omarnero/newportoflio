import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiFolder, FiLock } from "react-icons/fi";

import clinc from "../assets/clinc.png";
import base from "../assets/base.png";
import omnifood from "../assets/omnifood.png";
import houseMarket from "../assets/house_market.png";
import smartTeaching from "../assets/smartTeaching.png";
import easytask from "../assets/easytask.png";

const projectsData = [
  {
    id: 1,
    img: clinc,
    title: "Clinic App Management System",
    category: "Full Stack",
    desc: "A complete clinic and patient management system with authentication, appointment scheduling, and record tracking.",
    tags: ["React", "Redux Toolkit", ".NET", "SQL Server", "Tailwind CSS"],
    live: "https://clinid-app.vercel.app/",
    code: "https://github.com/omarnero/Clinid_app",
    featured: true,
  },
  {
    id: 2,
    img: smartTeaching,
    title: "Smart Teaching Platform",
    category: "React",
    desc: "Comprehensive e-learning portal designed and implemented during work at Ezdehar Company with interactive course material.",
    tags: ["React.js", "Bootstrap", "REST API", "Responsive UI"],
    live: "https://smartteachingsystem.ezdhaar.com/",
    code: null,
    featured: true,
  },
  {
    id: 3,
    img: base,
    title: "Base Kuwait E-Commerce",
    category: "React",
    desc: "Commercial e-commerce web platform engineered at GreeNetwork with multi-category product catalog and responsive checkout.",
    tags: ["React.js", "State Management", "Tailwind CSS", "API Integration"],
    live: "https://basekwt.com/",
    code: null,
    featured: false,
  },
  {
    id: 4,
    img: easytask,
    title: "Easy Task Manager",
    category: "Angular",
    desc: "Corporate task tracking and productivity management tool built with Angular for team collaboration and task assignments.",
    tags: ["Angular", "TypeScript", "SCSS", "RxJS"],
    live: "https://easy-task-three.vercel.app/",
    code: "https://github.com/omarnero/Easy-Task",
    featured: false,
  },
  {
    id: 5,
    img: houseMarket,
    title: "House Market Place",
    category: "React",
    desc: "Real estate marketplace for exploring, listing, and renting properties with geolocation and modern listing cards.",
    tags: ["React.js", "Firebase", "Leaflet", "Tailwind CSS"],
    live: "https://house-market-place-eight.vercel.app/",
    code: "https://github.com/omarnero/house-market-place",
    featured: false,
  },
  {
    id: 6,
    img: omnifood,
    title: "Omnifood Restaurant",
    category: "UI / Web",
    desc: "High-converting food subscription landing page focused on modern responsive design, micro-interactions, and accessibility.",
    tags: ["Vanilla CSS", "HTML5", "Responsive Design", "Flexbox/Grid"],
    live: "https://nero-omnifood.netlify.app/",
    code: "https://github.com/omarnero/omnifood",
    featured: false,
  },
];

const categories = ["All", "Full Stack", "React", "Angular", "UI / Web"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-white/5" id="projects">
      {/* Background ambient lighting */}
      <div className="ambient-glow-indigo top-10 left-1/4 opacity-20"></div>
      <div className="ambient-glow-violet bottom-10 right-10 opacity-20"></div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Featured Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Recent Work & Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4 mb-4"></div>
          <p className="text-slate-400 text-sm md:text-base max-w-xl">
            A curated showcase of real-world web applications, production systems, and design implementations.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-indigo-600 text-white shadow-glow"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:border-indigo-500/40"
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
                
                {/* Badge Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md border border-white/10 text-indigo-300">
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs md:text-sm font-semibold shadow-glow hover:shadow-indigo-500/40 transition-all duration-200"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="text-sm" />
                  </a>

                  {project.code ? (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 text-xs md:text-sm font-semibold transition-all duration-200"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="text-base" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/60 text-slate-500 border border-white/5 text-xs font-medium cursor-not-allowed"
                      title="Proprietary / Client codebase"
                    >
                      <FiLock className="text-xs" />
                      <span>Private</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-3">
            Want to explore more code and open source experiments?
          </p>
          <a
            href="https://github.com/omarnero"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 border border-white/10 hover:border-indigo-500/40 text-slate-200 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-card"
          >
            <FiFolder className="text-indigo-400" />
            <span>Visit my GitHub Profile (@omarnero)</span>
            <FiExternalLink className="text-xs text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
