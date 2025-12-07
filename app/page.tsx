import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import {
  PinLocation01Icon,
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
    <div className="min-h-screen flex flex-col items relative">
      <div className="position fixed top-0 right-20 flex flex-col items-center w-px">
        <div className="h-40 w-px bg-neutral-500 rounded-md"></div>
        <div className="rotate-90 text-neutral-500 font-mono mt-20 text-sm hover:text-neutral-100 transition-all cursor-pointer">
          jungyanlee@gmail.com
        </div>
      </div>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto w-full flex flex-col">
        <header className="flex justify-between mt-20 items-center font-inter">
          <span className=" text-neutral-50  rounded-md size-10 flex items-center justify-center font-inter font-semibold">
            JY
          </span>
        </header>

        <section className="flex flex-col mt-30">
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
          <h1 className="relative mt-5 w-fit text-transparent bg-clip-text text-7xl font-medium font-sans bg-linear-to-br from-white to-white   ">
            Lee Jung Yan
          </h1>

          <h4 className=" mt-2 font-medium font-inter text-neutral-400">
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
          <div className="flex text-neutral-400 mt-4 items-center gap-1.5 font-sans text-sm">
            <span className="text-rose-400">
              <TiLocation size={16} color="currentColor" strokeWidth={1.5} />
            </span>
            <span>Ipoh , Perak</span>
          </div>
          <div className="flex gap-x-3 mt-4 font-inter text-sm *:flex *:gap-2 *:items-center *:px-4 *:py-2 *:rounded-xl  *:bg-neutral-800 *:hover:bg-neutral-800/80 *:transition-all *:border *:border-neutral-700/30 *:text-neutral-200">
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
              href="www.linkedin.com/in/lee-jung-yan-619863338"
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
            <a href="/resume.docx" target="_blank">
              <HugeiconsIcon
                icon={File01Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
              <span>Resume</span>
            </a>
            <a href="/cv.docx" target="_blank">
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

        <section className="flex flex-col mt-20">
          <span className="text-white uppercase font-normal font-mono text-sm">
            experiences
          </span>
          <div className="flex flex-col mt-2 gap-2">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-inter bg-clip-text text-transparent bg-linear-to-br from-neutral-50  to-neutral-600 font-bold text-2xl">
                  Software Engineer
                </span>
                <div
                  className="bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 font-semibold text-xs font-inter px-2 py-0.5 text-emerald-500 rounded-full ml-2
                "
                >
                  Current
                </div>
              </div>

              <div className="flex items-center text-sm">
                <Image
                  src="/yellresearch.png"
                  alt="Polyware"
                  width={16}
                  height={16}
                  className="rounded-md object-contain"
                />
                <span className="text-neutral-400 ml-2">Yell Research</span>
                <span className="text-neutral-500 ml-auto">
                  Dec, 2025 - Present
                </span>
              </div>
              <span className="mt-2 text-xs font-inter text-white text-justify">
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
              <span className="font-inter bg-clip-text text-transparent bg-linear-to-br from-neutral-50  to-neutral-600 font-bold text-2xl">
                Software Engineer
              </span>
              <div className="flex items-center text-sm">
                <Image
                  src="/polyware.png"
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
              <span className="mt-2 text-xs font-inter text-white text-justify">
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

        <section className="flex flex-col mt-20 w-full">
          <span className="text-white uppercase font-normal font-mono text-sm">
            Technologies
          </span>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="mt-4 flex flex-wrap gap-2 text-white text-[10px] font-sans *:gap-2 *:flex *:flex-col *:items-center *:justify-center *:size-20 *:border *:border-white/10 *:bg-white/10 backdrop-blur-sm *:rounded-md *:cursor-pointer">
              <div className="">
                <FaPhp size={32} />
                <span className="">PHP</span>
              </div>
              <div>
                <FaLaravel size={32} />
                <span>Laravel</span>
              </div>
              <div>
                <FaHtml5 size={32} />
                <span>HTML5</span>
              </div>
              <div>
                <FaCss3Alt size={32} />
                <span>CSS3</span>
              </div>
              <div>
                <SiJavascript size={32} />
                <span>Javascript</span>
              </div>
              <div>
                <SiTypescript size={32} />
                <span>Typescript</span>
              </div>
              <div>
                <SiJquery size={32} />
                <span>jQuery</span>
              </div>
              <div>
                <RiTailwindCssFill size={32} />
                <span>Tailwind</span>
              </div>
              <div>
                <RiNextjsFill size={32} />
                <span>Next.js</span>
              </div>
              <div>
                <FaReact size={32} />
                <span>React</span>
              </div>
              <div>
                <FaVuejs size={32} />
                <span>Vue</span>
              </div>
              <div>
                <SiLivewire size={32} />
                <span>Livewire</span>
              </div>
              <div>
                <FaNodeJs size={32} />
                <span>Node.js</span>
              </div>
              <div>
                <SiExpress size={32} />
                <span>Express</span>
              </div>
              <div>
                <SiInertia size={32} />
                <span>Inertia</span>
              </div>
              <div>
                <SiAlpinedotjs size={32} />
                <span>Alpine</span>
              </div>
              <div>
                <FaPython size={32} />
                <span>Python</span>
              </div>
              <div>
                <SiFastapi size={32} />
                <span>Fast API</span>
              </div>
              <div>
                <SiPandas size={32} />
                <span>Pandas</span>
              </div>
              <div>
                <SiSelenium size={32} />
                <span>Selenium</span>
              </div>
              <div>
                <SiDart size={32} />
                <span>Dart</span>
              </div>
              <div>
                <SiFlutter size={32} />
                <span>Flutter</span>
              </div>
              <div>
                <FaReact size={32} />
                <span>React Native</span>
              </div>
              <div>
                <FaGitAlt size={32} />
                <span>Git</span>
              </div>
              <div>
                <SiGithubactions size={32} />
                <span>Github Action</span>
              </div>
              <div>
                <FaAws size={32} />
                <span>AWS</span>
              </div>
              <div>
                <FaDocker size={32} />
                <span>Docker</span>
              </div>
              <div>
                <SiLangchain size={32} />
                <span>Langchain</span>
              </div>
              <div>
                <TbSql size={32} />
                <span>SQL</span>
              </div>
              <div>
                <SiMongodb size={32} />
                <span>Mongo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col mt-20 mb-10 w-full">
          <span className="text-white uppercase font-normal font-mono text-sm">
            Projects
          </span>
        </section>
      </div>
    </div>
  );
}
