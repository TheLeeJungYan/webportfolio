"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineCheck,
  HiOutlineLocationMarker,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineDocumentDuplicate,
} from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaPhp,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaPython,
  FaDocker,
  FaAws,
  FaRobot,
  FaDatabase,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiFastapi,
  SiFlutter,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiEnvoyproxy,
  SiExpress,
  SiLivewire,
  SiInertia,
  SiNestjs,
  SiLinux,
  SiGnubash,
  SiPandas,
  SiRabbitmq,
  SiLangchain,
  SiSelenium,
  SiJquery,
  SiAlpinedotjs,
  SiTestinglibrary,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    const initialTheme = saved || "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("jungyanlee@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const projects = [
    {
      title: "Snap2Summon",
      tagline: "AI Vision Mobile Enforcement Assistant",
      description:
        "An AI-powered mobile application that automatically detects vehicle details and license plates via computer vision, pre-filling digital summon forms to accelerate law enforcement workflows.",
      image: "/projects/snap2summon.png",
      tags: ["Flutter", "FastAPI", "Riverpod", "LangChain", "GenAI"],
      role: "Lead Mobile & Backend Developer",
      githubUrl: "https://github.com/TheLeeJungYan",
      liveUrl: null,
    },
    {
      title: "DineFlow POS",
      tagline: "Real-Time Restaurant & Kitchen Execution Suite",
      description:
        "A full-stack point-of-sale platform featuring real-time table state synchronization, instant kitchen display ticket dispatching, and automated sales reporting.",
      image: "/projects/dineflow.png",
      tags: ["React 19", "TypeScript", "FastAPI", "Tailwind CSS"],
      role: "Full-Stack Engineer",
      githubUrl: "https://github.com/TheLeeJungYan",
      liveUrl: null,
    },
    {
      title: "MathZap",
      tagline: "High-Velocity Arithmetic Assessment Web App",
      description:
        "Interactive math trainer featuring zero-latency reactive state management, rapid-fire timed arithmetic challenges, and instant performance metrics.",
      image: "/projects/mathzap.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      role: "Frontend Engineer",
      githubUrl: "https://github.com/TheLeeJungYan",
      liveUrl: "https://mathzap.vercel.app",
    },
    {
      title: "Personal Engineering Portfolio",
      tagline: "High-Performance Portfolio & Architecture Showcase",
      description:
        "Minimalist, typography-driven portfolio crafted with Next.js App Router, React 19, Motion, and Tailwind CSS v4, built for sub-second mobile load times.",
      image: "/projects/webportfolio.png",
      tags: ["Next.js", "React 19", "TypeScript", "Motion", "Tailwind v4"],
      role: "Design & Development",
      githubUrl: "https://github.com/TheLeeJungYan",
      liveUrl: "https://jungyanlee.vercel.app",
    },
  ];

  const experiences = [
    {
      role: "Solution Developer",
      company: "Eastern Decorator",
      period: "Apr 2026 — Present",
      logo: "/companies/easterndecorator.png",
      summary:
        "Enterprise solutions engineering focused on automated ETL workflows, document OCR processing, system integrations, and custom Model Context Protocol (MCP) server implementations.",
      bullets: [
        "Architected high-throughput data extraction and ETL workflows with Python, Pandas, and FastAPI connecting internal ERP and business operations.",
        "Engineered production OCR pipelines automating structured data capture from invoices and supply chain records.",
        "Built and deployed custom Model Context Protocol (MCP) servers and tools, enabling LLMs and AI agent integrations across internal databases.",
      ],
      skills: ["Python", "FastAPI", "Pandas", "ETL", "OCR", "MCP", "RabbitMQ", "SQL", "Linux", "Bash"],
    },
    {
      role: "Software Engineer",
      company: "Yell Research",
      period: "Dec 2025 — Mar 2026",
      logo: "/companies/yellresearch.png",
      summary:
        "Full-stack software engineering in a fast-paced agency environment, delivering scalable web features, tuning API throughput, and deploying cloud services.",
      bullets: [
        "Architected responsive full-stack features using PHP, Express, and React to meet rapid client delivery schedules.",
        "Configured and maintained Envoy proxy gateways and optimized backend request pipelines for high-traffic endpoints.",
        "Collaborated on Azure DevOps automated continuous integration and deployment workflows.",
      ],
      skills: ["PHP", "Express", "React", "TypeScript", "Envoy", "Azure DevOps"],
    },
    {
      role: "Software Engineer",
      company: "Polyware Sdn Bhd",
      period: "Jun 2023 — Dec 2025",
      logo: "/companies/polyware.png",
      summary:
        "Core enterprise ERP engineering focused on manufacturing workflow automation, custom operational modules, and relational database optimization.",
      bullets: [
        "Engineered end-to-end ERP modules automating procurement cycles, manufacturing scheduling, and inventory audits.",
        "Replaced manual paper-based processes with reactive Laravel, Livewire, and Vue interfaces, boosting departmental productivity.",
        "Tuned high-volume MySQL queries and transaction schemas hosted on AWS EC2 and RDS instances.",
      ],
      skills: ["Laravel", "Livewire", "Vue.js", "Inertia", "MySQL", "AWS"],
    },
  ];

  const skillGroups = [
    {
      category: "AI, LLM & Data",
      items: [
        { name: "MCP", icon: FaRobot },
        { name: "LangChain", icon: SiLangchain },
        { name: "LangGraph", icon: FaRobot },
        { name: "Python", icon: FaPython },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Pandas", icon: SiPandas },
        { name: "OCR", icon: FaRobot },
      ],
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "PHP", icon: FaPhp },
        { name: "Laravel", icon: FaLaravel },
        { name: "NestJS", icon: SiNestjs },
        { name: "RabbitMQ", icon: SiRabbitmq },
        { name: "Java", icon: FaJava },
        { name: "Livewire", icon: SiLivewire },
        { name: "Express", icon: SiExpress },
        { name: "MySQL / SQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React", icon: FaReact },
        { name: "React Native", icon: TbBrandReactNative },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Vue.js", icon: FaVuejs },
        { name: "Flutter", icon: SiFlutter },
        { name: "Inertia.js", icon: SiInertia },
        { name: "Alpine.js", icon: SiAlpinedotjs },
        { name: "jQuery", icon: SiJquery },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Linux", icon: SiLinux },
        { name: "Bash", icon: SiGnubash },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
        { name: "Azure DevOps", icon: VscAzure },
        { name: "Envoy Proxy", icon: SiEnvoyproxy },
      ],
    },
    {
      category: "Enterprise & Automation",
      items: [
        { name: "Playwright", icon: SiTestinglibrary },
        { name: "Selenium", icon: SiSelenium },
        { name: "VBA", icon: HiOutlineDocumentDuplicate },
        { name: "Office.js", icon: FaMicrosoft },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#09090b] text-[#18181b] dark:text-[#fafafa] transition-colors duration-300 selection:bg-neutral-300 dark:selection:bg-neutral-700">
      {/* Top Floating Minimalist Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#09090b]/80 border-b border-neutral-200 dark:border-white/[0.06] transition-colors">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#"
            className="text-xs font-semibold tracking-wider uppercase text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white transition flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Lee Jung Yan
          </a>
          
          <div className="flex items-center gap-5">
            <nav className="hidden sm:flex items-center gap-5 text-xs text-neutral-600 dark:text-neutral-400">
              <a href="#projects" className="hover:text-black dark:hover:text-white transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition">
                Experience
              </a>
              <a href="#skills" className="hover:text-black dark:hover:text-white transition">
                Skills
              </a>
              <a href="#contact" className="hover:text-black dark:hover:text-white transition">
                Contact
              </a>
            </nav>

            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle Light and Dark Mode"
                className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition cursor-pointer active:scale-95"
              >
                {theme === "dark" ? (
                  <HiOutlineSun className="w-4 h-4 text-amber-400" />
                ) : (
                  <HiOutlineMoon className="w-4 h-4 text-neutral-600" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-28 space-y-24">
        {/* ========================================================================= */}
        {/* HERO SECTION: Emil Kowalski / Lee Robinson inspired minimalist intro */}
        {/* ========================================================================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
          className="space-y-6"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Opportunities</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Software Engineer crafting reliable systems.
            </h1>
            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Hi, I’m <span className="text-neutral-900 dark:text-white font-medium">Lee Jung Yan</span>. I engineer intelligent ETL pipelines, enterprise integration hubs, and responsive full-stack applications from Ipoh, Malaysia.
            </p>
          </div>

          {/* Location & Quick Meta */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500 font-mono">
            <HiOutlineLocationMarker className="text-rose-500 text-sm" />
            <span>Ipoh, Perak, Malaysia</span>
            <span>•</span>
            <span>Solutions & Architecture</span>
          </div>

          {/* Social & Contact Actions */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={copyEmail}
              className="relative px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <HiOutlineCheck className="text-emerald-400 dark:text-emerald-700 text-sm" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <HiOutlineMail className="text-sm" />
                  <span>jungyanlee@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/TheLeeJungYan"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-medium transition flex items-center gap-2 active:scale-95 shadow-xs"
            >
              <FaGithub className="text-sm" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/lee-jung-yan-619863338"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-medium transition flex items-center gap-2 active:scale-95 shadow-xs"
            >
              <FaLinkedin className="text-sm text-sky-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/documents/Resume (Lee Jung Yan).docx"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white text-xs font-medium transition flex items-center gap-2 active:scale-95 shadow-xs"
            >
              <HiOutlineDocumentText className="text-sm" />
              <span>Resume</span>
            </a>
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* PROJECTS SECTION: Large, crisp visual cards with real screenshots */}
        {/* ========================================================================= */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={1}
          className="space-y-8 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-200 dark:border-white/[0.08] pb-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Selected production systems & applications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <motion.article
                key={proj.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 overflow-hidden transition-all shadow-xs hover:shadow-md"
              >
                {/* Visual Screenshot Frame */}
                <div className="relative w-full h-56 bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/[0.06] overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        {proj.title}
                        <FiArrowUpRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400/90">
                      {proj.tagline}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08] text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-neutral-200 dark:border-white/[0.06] text-xs font-medium">
                      {proj.liveUrl ? (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <FiArrowUpRight className="text-xs" />
                        </a>
                      ) : null}
                      {proj.githubUrl ? (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition flex items-center gap-1"
                        >
                          <FaGithub className="text-xs" />
                          <span>Source</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* EXPERIENCE SECTION: Scannable, bullet-pointed impact with rounded logos */}
        {/* ========================================================================= */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={2}
          className="space-y-8 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-200 dark:border-white/[0.08] pb-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Work Experience
            </h2>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Proven engineering track record
            </span>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    {/* Logo container with rounded border */}
                    <div className="relative w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 overflow-hidden flex items-center justify-center p-1.5 shrink-0 shadow-2xs">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={44}
                        height={44}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 list-disc list-outside ml-4 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] text-[11px] font-mono text-neutral-600 dark:text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* SKILLS SECTION: Grouped cleanly without cognitive overload */}
        {/* ========================================================================= */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={3}
          className="space-y-8 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-neutral-200 dark:border-white/[0.08] pb-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Skills & Technologies
            </h2>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Languages, frameworks, protocols & infrastructure
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/[0.08] space-y-4 shadow-xs"
              >
                <h3 className="text-xs font-semibold text-neutral-700 dark:text-neutral-200 uppercase tracking-wider font-mono">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {group.items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-white/[0.04] text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
                      >
                        <IconComponent className="text-sm text-neutral-500 shrink-0" />
                        <span className="text-[11px] truncate">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* CONTACT / CTA SECTION: Clean, direct invite */}
        {/* ========================================================================= */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          custom={4}
          className="p-8 md:p-12 rounded-3xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-white/[0.08] text-center space-y-5 scroll-mt-20 shadow-xs"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Let’s build something great together.
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            I’m always open to discussing new engineering opportunities, enterprise architecture, or innovative web and mobile applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={copyEmail}
              className="px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
            >
              {copied ? (
                <>
                  <HiOutlineCheck className="text-emerald-400 dark:text-emerald-700 text-sm" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <HiOutlineMail className="text-sm" />
                  <span>jungyanlee@gmail.com</span>
                </>
              )}
            </button>
            <a
              href="https://www.linkedin.com/in/lee-jung-yan-619863338"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 text-neutral-800 dark:text-white text-xs font-medium transition active:scale-95 shadow-xs"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-white/[0.06] py-8 text-center text-xs text-neutral-500 font-mono transition-colors">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Lee Jung Yan. Built with Next.js & Motion.</span>
          <span>Ipoh, Perak, Malaysia</span>
        </div>
      </footer>
    </div>
  );
}
