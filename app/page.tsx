import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import {
  Mail01Icon,
  Github01Icon,
  Linkedin01Icon,
  File01Icon,
  File02Icon,
} from "@hugeicons/core-free-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJquery,
  SiTypescript,
  SiAlpinedotjs,
  SiLivewire,
  SiExpress,
  SiInertia,
  SiFastapi,
  SiPandas,
  SiSelenium,
  SiDart,
  SiFlutter,
  SiGithubactions,
  SiLangchain,
  SiMongodb,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items relative bg-black">
      <div className="fixed top-0 right-20 hidden lg:flex flex-col items-center w-px group">
        <div className="h-40 w-px bg-neutral-500 rounded-md group-hover:bg-neutral-100"></div>
        <div className="rotate-90 text-neutral-500 font-mono mt-20 text-sm group-hover:text-neutral-100 transition-all cursor-pointer">
          jungyanlee@gmail.com
        </div>
      </div>
      {/* <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 h-full w-full bg-[radial-gradient(circle_400px_at_25%_200px,#fbfbfb36,#000)]"></div>
        </div>
      </div> */}
      <div className="max-w-4xl px-10 py-10 mx-auto w-full flex flex-col">
        <header className="flex justify-between mt-10 items-center font-inter">
          <span className=" text-neutral-50  rounded-md size-10 flex items-center justify-center font-inter font-semibold">
            JY
          </span>
        </header>

        <section className="flex flex-col mt-20 md:mt-30">
          <div className="flex">
            <span className="relative inline-block overflow-hidden rounded-full p-px">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#f0fdf4_50%,#171717_100%)]"></span>
              <div className="inline-flex gap-2 items-center bg-neutral-800 h-full w-full cursor-pointer justify-center rounded-full px-3 py-1 text-xs font-medium leading-5 backdrop-blur-xl  text-slate-200">
                <div className="size-2 bg-emerald-200 animate-pulse rounded-full"></div>
                <span className="text-emerald-50 font-inter">
                  Available for Opportunities
                </span>
              </div>
            </span>
          </div>
          <h1 className="relative mt-5 w-fit text-transparent bg-clip-text text-5xl md:text-7xl font-medium font-sans bg-linear-to-br from-white to-white   ">
            Lee Jung Yan
          </h1>

          <h4 className=" mt-2 font-medium font-inter text-neutral-400 md:text-normal text-sm text-justify">
            Software Engineer focused on building
            <span className="text-emerald-50 italic"> scalable</span> business
            systems ,
            <span className="text-emerald-50 italic">
              optimizing performance
            </span>
            , and delivering
            <span className="text-emerald-50 italic"> reliable </span>{" "}
            enterprise solutions .
          </h4>
          <div className="flex text-neutral-400 mt-4 items-center gap-1.5 font-sans md:text-sm text-xs">
            <span className="text-rose-400">
              <TiLocation size={16} color="currentColor" strokeWidth={1.5} />
            </span>
            <span>Ipoh , Perak</span>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-x-3 mt-4 font-inter text-xs md:text-sm *:flex *:gap-2 *:items-center *:px-4 *:py-2 *:rounded-xl  *:bg-neutral-800 *:hover:bg-neutral-800/80 *:transition-all *:border *:border-neutral-700/30 *:text-neutral-200">
            <a
              href="mailto:jungyanlee@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>Email</span>
            </a>
            <a href="https://github.com/TheLeeJungYan" target="_blank">
              <HugeiconsIcon
                icon={Github01Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lee-jung-yan-619863338"
              target="_blank"
            >
              <HugeiconsIcon
                icon={Linkedin01Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>Linkedin</span>
            </a>
            <a href="/documents/resume.docx" target="_blank">
              <HugeiconsIcon
                icon={File01Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>Resume</span>
            </a>
            <a href="/documents/cv.docx" target="_blank">
              <HugeiconsIcon
                icon={File02Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>CV</span>
            </a>
          </div>
        </section>

        <section className="flex flex-col mt-10 md:mt-20 z-10">
          <span className="text-white uppercase font-normal font-mono text-sm">
            experiences
          </span>
          <div className="flex flex-col mt-2 gap-2">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-inter bg-clip-text text-transparent bg-linear-to-br from-neutral-50  to-neutral-600 font-bold text-lg md:text-2xl">
                  Software Engineer
                </span>
                <div
                  className="bg-emerald-500/10  border border-emerald-500/30 font-semibold text-xs font-inter px-2 py-0.5 text-emerald-500 rounded-full ml-2
                "
                >
                  Current
                </div>
              </div>

              <div className="flex items-center text-xs md:text-sm">
                <Image
                  src="/companies/yellresearch.png"
                  alt="Yell Research"
                  width={16}
                  height={16}
                  className="rounded-md object-contain"
                />
                <span className="text-neutral-400 ml-2">Yell Research</span>
                <span className="text-neutral-500 ml-auto">
                  Dec, 2025 - Present
                </span>
              </div>
              <span className="mt-2 text-[11px] md:text-xs font-inter text-white text-justify">
                Full-stack application development in a fast-paced software
                house environment, delivering scalable features, enhancing
                system performance, and collaborating closely with
                cross-functional teams to build reliable, user-focused digital
                solutions.
              </span>
              <div className="flex"></div>
            </div>
            <div className="bg-linear-to-r from-neutral-600 via-neutral-50 to-neutral-600 h-px w-1/2 my-2"></div>
            <div className="flex flex-col">
              <span className="font-inter bg-clip-text text-transparent bg-linear-to-br from-neutral-50  to-neutral-600 font-bold text-lg md:text-2xl">
                Software Engineer
              </span>
              <div className="flex items-center text-xs md:text-sm">
                <Image
                  src="/companies/polyware.png"
                  alt="Polyware"
                  width={16}
                  height={16}
                  className="rounded-md"
                />
                <span className="text-neutral-400 ml-2">Polyware Sdn Bhd</span>
                <span className="text-neutral-500 ml-auto">
                  Jun, 2023 - Dec, 2025
                </span>
              </div>
              <span className="mt-2 text-[11px] md:text-xs  font-inter text-white text-justify">
                ERP application development focused on workflow automation,
                system enhancement, and seamless cross-department operations,
                including building new modules from scratch, improving existing
                features, and ensuring smooth integration across internal
                platforms.
              </span>
              <div className="flex text-neutral-200 gap-2 mt-2 items-center">
                <FaPhp size={20} />
                <FaLaravel size={16} />
                <SiLivewire size={16} />
                <FaHtml5 size={16} />
                <FaCss3Alt size={16} />
                <SiJavascript size={16} />
                <SiJquery size={16} />
                <RiTailwindCssFill size={16} />
                <FaVuejs size={16} />
                <SiInertia size={16} />
                <FaReact size={16} />
                <FaAws size={16} />
                <TbSql size={20} />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-10 md:mt-20 w-full z-10">
          <span className="text-white uppercase font-normal font-mono text-sm">
            Technologies
          </span>
          <div className="flex flex-col justify-center items-center w-full ">
            <div
              className="w-full mt-4 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-2
                    text-white text-[8px] sm:text-[10px] font-sans
                    *:gap-2 *:flex *:flex-col *:items-center *:justify-center
                    *:sm:border *:sm:border-white/5 *:sm:bg-white/5 *:sm:backdrop-blur-sm
                    *:rounded-md *:cursor-pointer
                    *:w-full *:sm:min-h-[90px]"
            >
              <div>
                <FaPhp className="text-[28px] sm:text-[32px]" />
                <span className="">PHP</span>
              </div>
              <div>
                <FaLaravel className="text-[28px] sm:text-[32px]" />
                <span>Laravel</span>
              </div>
              <div>
                <FaHtml5 className="text-[28px] sm:text-[32px]" />
                <span>HTML5</span>
              </div>
              <div>
                <FaCss3Alt className="text-[28px] sm:text-[32px]" />
                <span>CSS3</span>
              </div>
              <div>
                <SiJavascript className="text-[28px] sm:text-[32px]" />
                <span>Javascript</span>
              </div>
              <div>
                <SiTypescript className="text-[28px] sm:text-[32px]" />
                <span>Typescript</span>
              </div>
              <div>
                <SiJquery className="text-[28px] sm:text-[32px]" />
                <span>jQuery</span>
              </div>
              <div>
                <RiTailwindCssFill className="text-[28px] sm:text-[32px]" />
                <span>Tailwind</span>
              </div>
              <div>
                <RiNextjsFill className="text-[28px] sm:text-[32px]" />
                <span>Next.js</span>
              </div>
              <div>
                <FaReact className="text-[28px] sm:text-[32px]" />
                <span>React</span>
              </div>
              <div>
                <FaVuejs className="text-[28px] sm:text-[32px]" />
                <span>Vue</span>
              </div>
              <div>
                <SiLivewire className="text-[28px] sm:text-[32px]" />
                <span>Livewire</span>
              </div>
              <div>
                <FaNodeJs className="text-[28px] sm:text-[32px]" />
                <span>Node.js</span>
              </div>
              <div>
                <SiExpress className="text-[28px] sm:text-[32px]" />
                <span>Express</span>
              </div>
              <div>
                <SiInertia className="text-[28px] sm:text-[32px]" />
                <span>Inertia</span>
              </div>
              <div>
                <SiAlpinedotjs className="text-[28px] sm:text-[32px]" />
                <span>Alpine</span>
              </div>
              <div>
                <FaPython className="text-[28px] sm:text-[32px]" />
                <span>Python</span>
              </div>
              <div>
                <SiFastapi className="text-[28px] sm:text-[32px]" />
                <span>Fast API</span>
              </div>
              <div>
                <SiPandas className="text-[28px] sm:text-[32px]" />
                <span>Pandas</span>
              </div>
              <div>
                <SiSelenium className="text-[28px] sm:text-[32px]" />
                <span>Selenium</span>
              </div>
              <div>
                <SiDart className="text-[28px] sm:text-[32px]" />
                <span>Dart</span>
              </div>
              <div>
                <SiFlutter className="text-[28px] sm:text-[32px]" />
                <span>Flutter</span>
              </div>
              <div>
                <FaReact className="text-[28px] sm:text-[32px]" />
                <span>React Native</span>
              </div>
              <div>
                <FaGitAlt className="text-[28px] sm:text-[32px]" />
                <span>Git</span>
              </div>
              <div>
                <SiGithubactions className="text-[28px] sm:text-[32px]" />
                <span>Github Action</span>
              </div>
              <div>
                <FaAws className="text-[28px] sm:text-[32px]" />
                <span>AWS</span>
              </div>
              <div>
                <FaDocker className="text-[28px] sm:text-[32px]" />
                <span>Docker</span>
              </div>
              <div>
                <SiLangchain className="text-[28px] sm:text-[32px]" />
                <span>Langchain</span>
              </div>
              <div>
                <TbSql className="text-[28px] sm:text-[32px]" />
                <span>SQL</span>
              </div>
              <div>
                <SiMongodb className="text-[28px] sm:text-[32px]" />
                <span>Mongo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-10 md:mt-20 w-full z-100">
          <span className="text-white uppercase font-normal font-mono text-sm">
            Projects
          </span>
          <div className="flex gap-2 flex-1 mt-4 flex-col md:flex-row">
            <div
              className="relative isolate overflow-hidden flex-1 rounded-xl
                bg-linear-to-br from-white/5 to-white/10
                border border-white/5
                backdrop-blur-sm
                transform-gpu will-change-transform"
            >
              <div className="px-4 py-4 flex flex-col relative pb-30">
                <h3 className="text-transparent font-semibold font-inter bg-linear-to-br from-30% from-white to-white/50 bg-clip-text">
                  MathZap
                </h3>
                <span className="text-xs mt-1 font-inter text-neutral-400">
                  A simple interactive web application that lets users answer
                  multiple-choice math questions
                </span>
                <div className="mt-2 flex gap-1 text-white *:rounded-full  *:px-2 *:py-0.5 *:bg-neutral-700 *:text-[10px] font-inter">
                  <div>React</div>
                  <div>Typescript</div>
                  <div>Tailwind</div>
                  <div>Vercel</div>
                </div>
              </div>
              <Image
                src="/projects/mathzap.png"
                alt="Math Quiz"
                width={200}
                height={200}
                className="object-contain absolute -bottom-15 left-1/2 -translate-x-1/2 md:-right-1 -z-1"
              />
            </div>
            <div
              className="relative isolate overflow-hidden flex-1 md:flex-2 rounded-xl
                bg-linear-to-br from-white/5 to-white/10
                border border-white/5
                backdrop-blur-sm
                transform-gpu will-change-transform"
            >
              <div className="px-4 py-4 flex flex-col relative pb-30">
                <h3 className="text-transparent font-semibold font-inter bg-linear-to-br from-30% from-white to-white/50 bg-clip-text">
                  Web Portfolio
                </h3>
                <span className="text-xs mt-1 font-inter text-neutral-400">
                  A personal portfolio website showcasing projects, skills, and
                  professional experience in a clean and modern layout.
                </span>
                <div className="mt-2 flex gap-1 text-white *:rounded-full  *:px-2 *:py-0.5 *:bg-neutral-700 *:text-[10px] font-inter">
                  <div>Next</div>
                  <div>React</div>
                  <div>Typescript</div>
                  <div>Tailwind</div>
                  <div>Vercel</div>
                </div>
                <Image
                  src="/projects/webportfolio.png"
                  alt="Math Quiz"
                  width={400}
                  height={400}
                  className="rounded-2xl border border-white/5 shadow-2xl shadow-white/20 absolute -z-1 -bottom-10 left-1/2 -translate-x-1/2"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-1 mt-2 flex-col md:flex-row">
            <div
              className="relative isolate overflow-hidden flex-1 rounded-xl
                bg-linear-to-br from-white/5 to-white/10
                border border-white/5
                backdrop-blur-sm
                transform-gpu will-change-transform "
            >
              <div className="px-4 py-4 flex flex-col relative pb-30">
                <h3 className="text-transparent font-semibold font-inter bg-linear-to-br from-30% from-white to-white/50 bg-clip-text">
                  Snap2Summon
                </h3>
                <span className="text-xs mt-1 font-inter text-neutral-400">
                  An AI-powered app that extracts vehicle details from images
                  and auto-fills digital summon forms for fast enforcement.
                </span>
                <div className="mt-2 flex gap-1 text-white *:rounded-full  *:px-2 *:py-0.5 *:bg-neutral-700 *:text-[10px] font-inter">
                  <div>Flutter</div>
                  <div>Riverpod</div>
                  <div>FastApi</div>
                  <div>GenAi</div>
                  <div>Langchain</div>
                </div>
                <div className="absolute -z-1 -bottom-30 right-0">
                  <Image
                    src="/projects/snap2summon.png"
                    alt="Math Quiz"
                    width={400}
                    height={400}
                    className="object-contain rotate-20"
                  />
                </div>
              </div>
            </div>
            <div
              className="relative isolate overflow-hidden flex-1 rounded-xl
                bg-linear-to-br from-white/5 to-white/10
                border border-white/5
                backdrop-blur-sm
                transform-gpu will-change-transform"
            >
              <div className="px-4 py-4 flex flex-col relative pb-30">
                <h3 className="text-transparent font-semibold font-inter bg-linear-to-br from-30% from-white to-white/50 bg-clip-text">
                  DineFlow
                </h3>
                <span className="text-xs mt-1 font-inter text-neutral-400">
                  A complete restaurant POS solution for seamless ordering,
                  kitchen operations, and sales analytics.
                </span>
                <div className="mt-2 flex gap-1 text-white *:rounded-full  *:px-2 *:py-0.5 *:bg-neutral-700 *:text-[10px] font-inter">
                  <div>React</div>
                  <div>Typescript</div>
                  <div>FastApi</div>
                </div>
                <Image
                  src="/projects/dineflow.png"
                  alt="Math Quiz"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl absolute -z-1 -bottom-23 right-0"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
