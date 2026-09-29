"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
  ChevronRight,
  Code2,
  Server,
  Layers,
  Map,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import {
  portfolioData,
} from "../data/portfolio";

export default function Home() {
  const [activeTitle, setActiveTitle] = useState("");
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() || 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 && current > 50 ? "down" : "up");
    setIsScrolled(current > 20);
  });

  // Typing Effect
  useEffect(() => {
    const currentFullTitle = portfolioData.titles[titleIdx];
    let typingTimer: NodeJS.Timeout;

    if (isDeleting) {
      typingTimer = setTimeout(() => {
        setActiveTitle(currentFullTitle.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      }, 50);
    } else {
      typingTimer = setTimeout(() => {
        setActiveTitle(currentFullTitle.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIdx === currentFullTitle.length) {
      // Pause at full text
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIdx === 0) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % portfolioData.titles.length);
      }, 300); // small pause before typing next text
    }

    return () => clearTimeout(typingTimer);
  }, [charIdx, isDeleting, titleIdx]);

  // Force scroll to top on mount to fix sudden scrolling down issue
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-black/20 dark:selection:bg-cyan-500/30 selection:text-black dark:selection:text-cyan-200">
      {/* Navigation Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/80 bg-background/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-lg text-foreground flex items-center gap-2">
            <Image
              src="/image/RSLOGO.png"
              alt="Rohit Shukla Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            Rohit Shukla
          </span>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              className="hover:text-foreground dark:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-foreground dark:text-cyan-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-foreground dark:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-foreground dark:text-cyan-400 transition-colors"
            >
              Expertise
            </a>
            <a
              href="#contact"
              className="hover:text-foreground dark:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold rounded-full border border-black/20 dark:border-cyan-500/30 text-foreground dark:text-cyan-400 bg-black/5 dark:bg-black dark:bg-cyan-500/5 hover:bg-black/10 dark:bg-black dark:bg-cyan-500/15 hover:border-black/40 dark:border-black dark:border-cyan-400/60 transition-all duration-300 shadow-none dark:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg md:hidden transition-all duration-300 ease-in-out z-40 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-4 text-center font-medium">
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500">About</a>
            <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500">Experience</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500">Projects</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500">Expertise</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-500">Contact</a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="sm:hidden px-4 py-2 mt-4 text-sm font-semibold rounded-full border border-black/20 dark:border-cyan-500/30 text-foreground dark:text-cyan-400 bg-black/5 dark:bg-cyan-500/5"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </motion.header>

      <main className="relative max-w-7xl mx-auto px-6 py-12 space-y-32 z-20">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-[70vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center relative py-20 gap-12"
        >
          <div className="space-y-6 max-w-2xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/60 text-xs text-foreground dark:text-cyan-400 font-medium tracking-wide"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-cyan-500"></span>
              </span>
              Available for Contracts & Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            >
              Hey, I am Rohit Shukla, a <br />
              <span className="inline-flex items-center whitespace-nowrap">
                <span className="text-foreground min-h-[1.2em] font-extrabold">
                  {activeTitle}
                </span>
                <span className="ml-1 w-[3px] h-[0.9em] bg-black dark:bg-cyan-400 animate-blink"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-medium text-sm text-primary-foreground dark:text-black bg-black dark:bg-cyan-400 hover:bg-slate-800 dark:hover:bg-cyan-300 transition-all duration-300 flex items-center gap-2"
              >
                View My Projects
                <ChevronRight className="w-4 h-4 text-primary-foreground dark:text-black" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg font-medium text-sm text-slate-700 dark:text-slate-300 bg-secondary/60 border border-border hover:bg-accent/80 hover:text-foreground transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Get In Touch
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:ml-auto md:mr-0 lg:-mr-10 xl:-mr-14 relative"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-border shadow-2xl transform hover:scale-[1.02] hover:rotate-1 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <Image 
                src="/image/proimg.jpeg" 
                alt="Rohit Shukla - MERN Stack Developer from Nagpur" 
                fill 
                priority
                className="object-cover" 
              />
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-3xl -z-10 rounded-full opacity-60"></div>
          </motion.div>
        </section>

        {/* ABOUT / SUMMARY */}
        <section id="about" className="scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Core values & <br />
                <span className="text-foreground">Commitment</span>
              </h2>
              <div className="w-16 h-1 bg-slate-800 dark:bg-cyan-500 mt-4 rounded-full" />
            </div>
            <div className="md:col-span-2 text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
              <p>{portfolioData.about}</p>
              <p>
                In my role at{" "}
                <strong className="text-foreground dark:text-cyan-400">
                  HB Gadget Technology
                </strong>
                , I designed architectures to handle high-frequency mapping
                telemetry and custom geo-processing algorithms. I build scalable
                business applications with a client-first approach, taking performance and
                reliability seriously.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Professional Experience
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                A timeline of my impact and career growth in core tech
                positions.
              </p>
            </div>

            <div className="relative border-l border-border max-w-4xl mx-auto pl-6 sm:pl-10 space-y-16">
              {portfolioData.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline icon */}
                  <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-secondary border border-border group-hover:border-black dark:border-cyan-400 transition-colors duration-300">
                    <Briefcase className="w-4 h-4 text-foreground dark:text-cyan-400" />
                  </span>

                  {/* Experience Card */}
                  <div className="p-6 rounded-xl border border-border/80 bg-secondary/40 backdrop-blur-md hover:border-slate-700/80 transition-all duration-300 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground dark:text-cyan-400 transition-colors duration-200">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-foreground dark:text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-secondary dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-semibold self-start sm:self-center">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm list-none pl-0">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex gap-2 items-start">
                          <span className="text-foreground dark:text-cyan-400 mt-1.5">
                            •
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Performance metrics banner */}
                    {exp.metrics.length > 0 && (
                      <div className="pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex items-center gap-2 text-xs text-black dark:text-emerald-400 font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-emerald-400" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-black/5 dark:bg-slate-700 dark:bg-indigo-500/5 border border-border dark:border-indigo-500/10 text-foreground dark:text-indigo-300 text-xxs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section id="projects" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Featured Projects
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-light">
                Custom products engineered for high-performance and live
                operations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {portfolioData.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col rounded-xl border border-border bg-secondary/40 backdrop-blur-md overflow-hidden hover:border-slate-700/80 transition-all duration-300"
                >
                  <div className="p-6 pb-4 space-y-5">
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-lg bg-black/5 dark:bg-black dark:bg-cyan-500/5 border border-black/10 dark:border-cyan-500/10 text-foreground dark:text-cyan-400">
                        <Map className="w-5 h-5" />
                      </div>
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-slate-800 transition-all"
                        aria-label="External Link"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-foreground dark:text-cyan-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-900 dark:text-slate-300 font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-1.5">
                      <h4 className="text-xxs font-extrabold text-slate-900 dark:text-slate-300 uppercase tracking-widest">
                        Core Capabilities
                      </h4>
                      <ul className="text-slate-900 dark:text-slate-200 text-sm font-medium space-y-1.5 list-none pl-0">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex gap-2 items-start">
                            <span className="text-foreground dark:text-cyan-400 mt-0.5">
                              •
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics / Output */}
                    {project.metrics && (
                      <div className="bg-secondary/70 border border-border/80 rounded-lg p-3 space-y-1">
                        <span className="text-xxs font-bold text-black dark:text-emerald-500/80 uppercase tracking-widest">
                          Impact
                        </span>
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="text-xs text-slate-900 dark:text-slate-300 font-bold"
                          >
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech stack badge grid */}
                  <div className="p-6 pt-4 border-t border-border/40 space-y-2.5">
                    <h4 className="text-xxs font-extrabold text-slate-900 dark:text-slate-300 uppercase tracking-widest">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-slate-900 dark:text-slate-300 font-bold bg-secondary text-xxs border border-border font-mono group-hover:border-black/20 dark:border-cyan-500/20 group-hover:text-foreground dark:text-cyan-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL EXPERTISE & SKILLS */}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Technical Expertise
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-light">
                Architectural components, languages, and frameworks I leverage to build scalable systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {portfolioData.skillsMatrix.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-6 md:p-8 rounded-2xl border border-border/80 bg-secondary/20 backdrop-blur-sm overflow-hidden hover:border-slate-400 dark:hover:border-cyan-500/40 transition-all duration-500 shadow-sm"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-cyan-500/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="p-3 rounded-xl bg-background border border-border text-foreground dark:text-cyan-400 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(6,182,212,0.1)] group-hover:scale-110 transition-transform duration-500">
                        {idx === 0 && <Code2 className="w-5 h-5" />}
                        {idx === 1 && <Layers className="w-5 h-5" />}
                        {idx === 2 && <Server className="w-5 h-5" />}
                        {idx === 3 && <Award className="w-5 h-5" />}
                      </span>
                      <h3 className="text-xl font-bold text-foreground tracking-tight">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 text-sm font-medium rounded-lg border border-border/80 bg-background/50 text-slate-800 dark:text-slate-200 hover:text-foreground dark:hover:text-cyan-300 hover:border-black/30 dark:hover:border-cyan-400/50 hover:bg-black/5 dark:hover:bg-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CONTACT FOOTER */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border/80 pt-16"
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Education Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-foreground dark:text-cyan-400" />
                  Education Background
                </h2>
                <div className="w-12 h-1 bg-black dark:bg-cyan-500 mt-3 rounded-full" />
              </div>

              <div className="space-y-6">
                {portfolioData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg border border-border/60 bg-secondary/30 space-y-1 hover:border-border dark:hover:border-slate-700/60 transition-all duration-300"
                  >
                    <span className="text-xxs font-mono text-foreground dark:text-cyan-400">
                      {edu.period}
                    </span>
                    <h3 className="font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3">
                  <Mail className="w-6 h-6 text-foreground dark:text-indigo-400" />
                  Get In Touch
                </h2>
                <div className="w-12 h-1 bg-slate-700 dark:bg-indigo-500 mt-3 rounded-full" />
              </div>

              <div className="space-y-6">
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  Have a challenging project, fleet mapping requirement, or
                  position needing custom real-time software? Contact me
                  directly using the detail vectors below.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:border-black/20 dark:border-cyan-500/20 hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <span className="p-2 rounded-lg bg-black/5 dark:bg-black dark:bg-cyan-500/5 text-foreground dark:text-cyan-400 group-hover:scale-105 transition-transform duration-200">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xxs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                        Email Address
                      </div>
                      <div className="text-sm text-foreground font-medium">
                        {portfolioData.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${portfolioData.phone}`}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border hover:border-border dark:hover:border-indigo-500/20 hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <span className="p-2 rounded-lg bg-black/5 dark:bg-slate-700 dark:bg-indigo-500/5 text-foreground dark:text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xxs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                        Contact Number
                      </div>
                      <div className="text-sm text-foreground font-medium">
                        {portfolioData.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                    <span className="p-2 rounded-lg bg-black/5 dark:bg-slate-700 dark:bg-indigo-500/5 text-foreground dark:text-indigo-400 group-hover:scale-105 transition-transform duration-200">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xxs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider">
                        Location Vector
                      </div>
                      <div className="text-sm text-foreground font-medium">
                        {portfolioData.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social icons row */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={portfolioData.github}
                    className="p-3 rounded-lg border border-border bg-secondary/40 text-slate-700 dark:text-slate-300 hover:text-foreground hover:border-slate-700 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    className="p-3 rounded-lg border border-border bg-secondary/40 text-slate-700 dark:text-slate-300 hover:text-foreground hover:border-slate-700 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-slate-900 bg-[#02050e] py-8 text-center text-xs text-muted-foreground z-20 relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rohit Shukla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
