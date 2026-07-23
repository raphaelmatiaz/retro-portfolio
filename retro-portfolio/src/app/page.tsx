'use client';

import KinitoPetBackground from "./components/KinitoPetBackground";

import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import("@/components/ModelViewer/ModelViewer"), {
  ssr: false,
  loading: () => null,
});

import HeaderNavbar from "./components/HeaderNavbar";
import HeroGreeting from "./components/HeroGreeting";
import ProjectCard from "./components/ProjectCard";
import LogoLoop from "../components/LogoLoop";
import Win95Window from "./components/Win95Window";
import Win95Button from "./components/Win95Button";
import SkillBar from "./components/SkillBar";
import DesktopIcon from "./components/DesktopIcon";
import BsodEasterEgg from "./components/BsodEasterEgg";
import Taskbar from "./components/Taskbar";
import Footer from "./components/Footer";

import { AsciiArt } from "@/components/ui/ascii-art";

import { useState } from "react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiGit, SiGithub, SiFigma, SiNodedotjs, SiJavascript, SiUnity, SiDjango, SiPython, SiBlender } from "react-icons/si";

/* ──────────────────────────────────────────────────────────── */

function SectionHeading({ children, cyan = false }: { children: React.ReactNode; cyan?: boolean }) {
  return (
    <h2 className={`heading-95 ${cyan ? "heading-95-cyan" : ""} text-[20px] md:text-[26px] text-center mb-10`}>
      {children}
    </h2>
  );
}

function Marquee() {
  const items = [
    "★ WELCOME TO MY CORNER OF THE WORLD WIDE WEB ★",
    "☆ best viewed at 800×600 ☆",
    "★ NOW WITH 100% MORE BEVELS ★",
    "☆ sign my guestbook (coming since 1997) ☆",
    "★ NO POP-UPS. NO COOKIES. ONLY VIBES ★",
    "☆ dial-up friendly since forever ☆",
  ];
  const row = items.join("  ");
  return (
    <div className="bg-black border-y-2 border-[var(--vw-pink)] overflow-hidden py-1" aria-hidden="true">
      <div className="marquee-track">
        <span className="font-terminal text-[20px] text-[var(--vw-cyan)] pr-8">{row}</span>
        <span className="font-terminal text-[20px] text-[var(--vw-cyan)] pr-8">{row}</span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */

export default function Home() {
  const [mailSubject, setMailSubject] = useState("Let's build something cool");
  const [mailBody, setMailBody] = useState("");

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiUnity />, title: "Unity 6", href: "https://unity.com" },
    { node: <SiBlender />, title: "Blender", href: "https://www.blender.org/" },
    { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  ];

  return (
    <>
      <div id="page-content-wrapper" className="relative">
        <HeaderNavbar />

        {/* ═══════════ HERO — the part we love, untouched ═══════════ */}
        <section id="home" className="top-0 left-0 w-full h-screen z-0">
          <div className="relative w-full h-full">
            <KinitoPetBackground />
            <div
              id="3dModel-HeroPresentation-Wrapper"
              className="absolute top-[-64px] left-0 w-full h-full z-30 flex flex-row items-center justify-center overflow-hidden"
            >
              <ModelViewer
                url="/3d-models/avatar.glb"
                width={850}
                height={1150}
                enableManualZoom={false}
                showScreenshotButton={false}
                enableManualRotation={false}
                defaultRotationX={250}
                defaultRotationY={0}
                defaultZoom={1.5}
                environmentPreset={"sunset"}
                ambientIntensity={1.5}
              />
              <HeroGreeting />
            </div>
          </div>
        </section>

        <Marquee />

        {/* ═══════════ DRIVERS LOADED — tech logo loop ═══════════ */}
        <section className="w-full bevel-out bg-[var(--w95-silver)] p-[3px]">
          <div className="bevel-in bg-[var(--w95-silver)] py-6">
            <p className="font-terminal text-[16px] text-[var(--w95-gray)] text-center mb-3">
              C:\&gt; loading device drivers… all systems nominal
            </p>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={60}
              hoverSpeed={0}
              scaleOnHover={false}
              fadeOut={false}
              fadeOutColor="#c0c0c0"
              ariaLabel="Technologies I work with"
            />
          </div>
        </section>

        {/* ═══════════ THE DESKTOP ═══════════ */}
        <div className="desktop-bg relative z-10">

          {/* ── ABOUT ── */}
          <section id="about" className="py-24 px-4 md:px-8">
            <SectionHeading>ABOUT_ME.TXT</SectionHeading>
            <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
              <Win95Window
                title="about_me.txt - Notepad"
                icon="📝"
                menu={["File", "Edit", "Search", "Help"]}
                statusBar={["Ln 1, Col 1", "100%", "ANSI"]}
                className="flex-1 max-w-[620px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="bevel-field p-6 text-[14px] leading-relaxed">
                  <p className="mb-4">
                    Hello there! 👋
                    <br />
                    I&apos;m <strong>Rafael Matias</strong> — a modern day wizard. I write
                    strange things in weird languages and make digital magic happen!
                  </p>
                  <p className="mb-4">
                    More seriously: I&apos;m a web developer with 3 years of experience based
                    in Algarve, Portugal. Driven by a fascination for the invisible world
                    that drives our modern society.
                  </p>
                  <p className="mb-4">
                    I&apos;m continuously learning how technology works beneath the surface,
                    and tinkering with websites and applications. I like turning ideas into
                    working systems and expressing my creativity through problem solving.
                  </p>
                  <p>
                    Outside of development, I&apos;m also a classically trained musician, an
                    artist and an Indie Game Developer — which influences the way I approach
                    projects: combining structure, creativity, and attention to detail.
                  </p>
                </div>
              </Win95Window>

              <Win95Window
                title="me.bmp - Paint"
                icon="🎨"
                menu={["File", "Edit", "View", "Image"]}
                statusBar={["226×226", "For Help, click Help Topics"]}
                className="w-full max-w-[520px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="bevel-field p-[3px]">
                  <AsciiArt
                    src="/images/cv-pic-3.png"
                    resolution={226}
                    color="var(--color-white)"
                    backgroundColor="#0a0a0a"
                    animationStyle="fade"
                    animationDuration={1.5}
                    animateOnView={false}
                    className="mx-auto aspect-square w-full"
                  />
                </div>
              </Win95Window>
            </div>
          </section>

          {/* ── SKILLS + TECHNOLOGIES ── */}
          <section id="skills" className="py-24 px-4 md:px-8">
            <SectionHeading cyan>SYSTEM_PROPERTIES</SectionHeading>
            <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
              <Win95Window
                title="System Properties"
                icon="🧠"
                statusBar={["12 drivers installed", "0 conflicts"]}
                className="flex-1 max-w-[620px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                {/* fake property tabs */}
                <div className="flex items-end px-2 pt-2 text-[12px]">
                  <span className="bevel-out bg-[var(--w95-silver)] px-3 py-1 relative top-[1px] z-10 border-b-0 font-bold">
                    Skills
                  </span>
                  <span className="bevel-out bg-[var(--w95-silver)] px-3 py-[3px] text-[var(--w95-gray)]">
                    Performance
                  </span>
                  <span className="bevel-out bg-[var(--w95-silver)] px-3 py-[3px] text-[var(--w95-gray)]">
                    Vibes
                  </span>
                </div>
                <div className="bevel-out m-2 mt-0 p-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <SkillBar icon="⚡" label="JavaScript" value={90} />
                  <SkillBar icon="🔷" label="TypeScript" value={85} />
                  <SkillBar icon="⚛️" label="React / Next.js" value={88} />
                  <SkillBar icon="📐" label="HTML / CSS" value={92} />
                  <SkillBar icon="🌪️" label="Tailwind CSS" value={86} />
                  <SkillBar icon="🟢" label="Node.js" value={75} />
                  <SkillBar icon="🐍" label="Python / Django" value={70} />
                  <SkillBar icon="🎮" label="C# / Unity 6" value={80} />
                  <SkillBar icon="🧊" label="Blender" value={60} />
                  <SkillBar icon="🖌️" label="Figma" value={72} />
                  <SkillBar icon="🌿" label="Git / GitHub" value={85} />
                  <SkillBar icon="🧙" label="Digital Wizardry" value={100} />
                </div>
              </Win95Window>

              <Win95Window
                title="Device Manager"
                icon="🖥️"
                menu={["File", "Action", "View", "Help"]}
                statusBar={["This computer runs on creativity"]}
                className="w-full max-w-[440px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div id="technologies" className="bevel-field p-4 overflow-x-auto">
                  <pre className="font-terminal text-[17px] leading-[1.45] text-black">
{`🖥️ RAFAEL-95
 ├─ 🌐 Web Weaponry
 │   ├─ react.sys
 │   ├─ nextjs.dll
 │   ├─ tailwind.vxd
 │   └─ typescript.drv
 ├─ 🎮 Game Dev Peripherals
 │   ├─ unity6.exe
 │   ├─ csharp.dll
 │   └─ blender.3d
 ├─ 🎨 Creative Suite
 │   ├─ figma.ui
 │   └─ ms_paint.exe (mission critical)
 └─ ⚙️ Backend Machinery
     ├─ node.sys
     ├─ django.py
     └─ git.vcs`}
                  </pre>
                </div>
              </Win95Window>
            </div>
          </section>

          {/* ── PROJECTS — the vaporwave zone ── */}
          <section id="projects" className="vapor-sky relative overflow-hidden py-24 px-4 md:px-8">
            {/* synthwave sun */}
            <div className="vapor-sun absolute left-1/2 -translate-x-1/2 top-16 w-[300px] h-[300px] opacity-90 float-y" aria-hidden="true" />
            {/* wireframe floor */}
            <div className="vapor-grid absolute bottom-[-80px] left-[-20%] right-[-20%] h-[420px] opacity-40" aria-hidden="true" />

            <div className="relative z-10">
              <SectionHeading>MY_PROJECTS.EXE</SectionHeading>

              <h3 className="font-pixel text-[13px] text-[var(--vw-yellow)] text-center mb-8 mt-40 [text-shadow:2px_2px_0_#000]">
                ▸ learning_projects/ <span className="text-white">(for fun and learning 😎)</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <ProjectCard
                  projectSummary="A simple web app that generates absurd memes by combining randomized stock images with randomized english words."
                  projectName="Absurd Meme Generator"
                  projectImage="/images/meme-generator.webp"
                  projectNumber={1}
                  projectTechnologies={["HTML", "CSS", "JavaScript"]}
                  projectFeatures={["Procedural meme generation", "«Download Meme» Button"]}
                  projectCtaText="Generate a meme!"
                  projectCtaLink="https://raphaelmatiaz.github.io/Absurd-Meme-Generator/"
                  projectGithubLink="https://github.com/raphaelmatiaz/Absurd-Meme-Generator"
                />
                <ProjectCard
                  projectSummary="A web app that creates minimalist randomized abstract art. Based on the JavaScript math.random method, input settings allow you to explore the output and create unique patterns."
                  projectName="Abstract Art Generator"
                  projectImage="/images/art-generator.webp"
                  projectNumber={2}
                  projectTechnologies={["HTML", "CSS", "JavaScript"]}
                  projectFeatures={["Randomized abstract compositions", "Adjustable generation settings"]}
                  projectCtaText="Create crazy art!"
                  projectCtaLink="https://raphaelmatiaz.github.io/Abstract-Art-Generator/"
                  projectGithubLink="https://github.com/raphaelmatiaz/Abstract-Art-Generator"
                />
                <ProjectCard
                  projectSummary="A narrative focused, choices matter, text-based indie game inspired by the 'Dark Souls' game series. Played entirely inside the terminal. It's the first game I ever created!"
                  projectName="ETIC Souls"
                  projectImage="/images/etic-souls.webp"
                  projectNumber={3}
                  projectTechnologies={["Python"]}
                  projectFeatures={["Custom character creation", "Logical tree of choices and their consequences", "Ascii art UI"]}
                  projectCtaText="Install instructions"
                  projectCtaLink="https://github.com/raphaelmatiaz/ETIC-SOULS"
                  projectGithubLink="https://github.com/raphaelmatiaz/ETIC-SOULS"
                />
                <ProjectCard
                  projectSummary="Bombr is a social network platform designed as a simplified Instagram clone with a unique twist: users can only and exclusively post content (bomb!) on their friends' profiles instead of their own."
                  projectName="Bombr"
                  projectImage="/images/bombr.webp"
                  projectNumber={4}
                  projectTechnologies={["TypeScript", "React", "CSS", "Next.js"]}
                  projectFeatures={["Login / Register / Logout", "Google, Discord and Github OAuth methods", "Homepage Feed", "Post pictures, gifs and text on your friends' profiles", "Personal Profile for each user", "Home, User Search, Post, Notifications and profile routes", "Responsive Design (mobile / tablet / desktop)"]}
                  projectCtaText="Video showcase!"
                  projectCtaLink="https://www.youtube.com/watch?v=b_NQkbWEgDk&t=1s"
                  projectGithubLink="https://github.com/raphaelmatiaz/Bombr"
                />
              </div>

              <h3 className="font-pixel text-[13px] text-[var(--vw-mint)] text-center mb-8 mt-20 [text-shadow:2px_2px_0_#000]">
                ▸ serious_projects/ <span className="text-white">(oouh Very Serious 🧐)</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <ProjectCard
                  projectSummary="A technical challenge consisting in the design refactor and its code implementation, for a 2-sided marketplace SAAS platform."
                  projectName="LicitaNow (interview challenge)"
                  projectImage="/images/licita-now.webp"
                  projectNumber={5}
                  projectTechnologies={["HTML", "CSS", "JavaScript"]}
                  projectFeatures={["Figma ReDesign", "Responsive Design (mobile, tablet, desktop)"]}
                  projectCtaText="View my solution!"
                  projectCtaLink="https://raphaelmatiaz.github.io/LicitaNowChallenge/"
                  projectGithubLink="https://github.com/raphaelmatiaz/LicitaNowChallenge"
                />
                <ProjectCard
                  projectSummary="An indie 3D puzzle platformer set in an uncanny laundromat, with unique puzzle mechanics inspired by the 'Portal' series. Psychological horror mood, Nietzschean-Lovecraftian metaphorical narrative. LAUNDROMAT is my first commercially aimed game, in development by solo developer: me! 🙂"
                  projectName="LAUNDROMAT"
                  projectImage="/images/laundromat.webp"
                  projectNumber={6}
                  projectTechnologies={["C#", "Unity Engine 6"]}
                  projectFeatures={["3D Player Controller", "Gravity flipper", "Levitation of objects", "Numerous puzzle mechanics (pressure plates, buttons...)", "Diverse environment hazards to mess with the player", "Original Soundtrack", "Original story", "...and many other things that would fill the whole page if I listed them all..."]}
                  projectCtaText="Wishlist on Steam!"
                  projectCtaLink="https://store.steampowered.com/app/3936500/Laundromat/"
                  projectInstagramLink="https://www.instagram.com/laundromat_game/"
                />
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE + EDUCATION — setup wizard ── */}
          {/* NOTE: timeline entries below are placeholders — edit with real dates/names */}
          <section id="experience" className="py-24 px-4 md:px-8">
            <span id="education" />
            <SectionHeading cyan>SETUP_WIZARD.EXE</SectionHeading>
            <div className="max-w-[760px] mx-auto">
              <Win95Window
                title="Rafael Matias Setup Wizard"
                icon="💽"
                statusBar={["Setup will configure: 1 (one) developer", "placeholder data — edit me"]}
                className="shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="flex flex-col md:flex-row">
                  {/* wizard side art */}
                  <div className="w95-titlebar md:w-[150px] p-4 flex md:flex-col items-center justify-center gap-3">
                    <span className="text-[44px]">💽</span>
                    <span className="font-pixel text-[10px] text-white text-center leading-relaxed">
                      RAFAEL
                      <br />
                      SETUP
                      <br />
                      95
                    </span>
                  </div>

                  {/* wizard body */}
                  <div className="flex-1 p-5">
                    <p className="font-bold text-[15px] mb-4">
                      The following components have been installed:
                    </p>

                    <div className="bevel-field p-4 flex flex-col gap-3 text-[13px]">
                      <p className="text-[12px] font-bold text-[var(--w95-gray)]">— EDUCATION —</p>
                      <p>☑ <strong>classical_music_training.mid</strong> — conservatory-trained musician <span className="text-[var(--w95-gray)]">(installed in childhood, runs at startup)</span></p>
                      <p>☑ <strong>web_dev_course.iso</strong> — Full-Stack Web Development <span className="text-[var(--w95-gray)]">(2022 – 2024)</span></p>
                      <p>☑ <strong>game_dev.pak</strong> — Unity &amp; game design, self-taught <span className="text-[var(--w95-gray)]">(always installing updates)</span></p>

                      <p className="text-[12px] font-bold text-[var(--w95-gray)] mt-2">— EXPERIENCE —</p>
                      <p>▶ <strong>web_developer.exe</strong> — building websites &amp; apps <span className="text-[var(--w95-gray)]">(3 years, currently running)</span></p>
                      <p>▶ <strong>laundromat_game.exe</strong> — solo indie game development <span className="text-[var(--w95-gray)]">(in development, do not close this process)</span></p>
                      <p>☑ <strong>licitanow_challenge.zip</strong> — marketplace SAAS redesign challenge <span className="text-[var(--w95-gray)]">(completed successfully)</span></p>
                    </div>

                    {/* installing the future */}
                    <div className="mt-5">
                      <p className="text-[13px] mb-1.5">
                        Installing: <span className="font-bold">the_future.exe</span>
                      </p>
                      <div className="bevel-field h-[18px] p-[3px]">
                        <div
                          className="h-full w-[45%]"
                          style={{ background: "repeating-linear-gradient(90deg, var(--w95-navy) 0 12px, transparent 12px 15px)" }}
                        />
                      </div>
                      <p className="font-terminal text-[15px] text-[var(--w95-gray)] mt-1">
                        45% complete — time remaining: a lifetime (this is fine)
                      </p>
                    </div>

                    <div className="flex justify-end gap-2 mt-5">
                      <Win95Button className="text-[13px]">&lt; Back</Win95Button>
                      <Win95Button className="text-[13px] font-bold" onClick={() => document.getElementById("hobbies")?.scrollIntoView({ behavior: "smooth" })}>
                        Next &gt;
                      </Win95Button>
                      <Win95Button className="text-[13px]" disabled>Cancel</Win95Button>
                    </div>
                  </div>
                </div>
              </Win95Window>
            </div>
          </section>

          {/* ── HOBBIES + INTERESTS — the backrooms ── */}
          <section id="hobbies" className="backrooms-bg hum-flicker py-24 px-4 md:px-8">
            <span id="interests" />
            <SectionHeading>C:\BACKROOMS\HOBBIES</SectionHeading>
            <p className="font-terminal text-[18px] text-black/70 text-center mb-10 -mt-6">
              you&apos;ve noclipped into the hobbies section. the fluorescent hum is normal.
            </p>

            <div className="max-w-[860px] mx-auto">
              <Win95Window
                title="Exploring - C:\Backrooms\Hobbies"
                icon="📁"
                menu={["File", "Edit", "View", "Help"]}
                statusBar={["8 object(s)", "666 KB free"]}
                className="shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="desktop-bg p-6 flex flex-wrap justify-center gap-4">
                  <DesktopIcon icon="🎹" label="midi_composer.exe" />
                  <DesktopIcon icon="🎼" label="classical_music.pdf" />
                  <DesktopIcon icon="🎨" label="ms_paint_masterpieces" />
                  <DesktopIcon icon="👾" label="indie_game_dev.log" />
                  <DesktopIcon icon="🕹️" label="retro_games" />
                  <DesktopIcon icon="📼" label="vhs_collection" />
                  <DesktopIcon icon="🧠" label="tech_rabbit_holes.url" />
                  <BsodEasterEgg />
                </div>
              </Win95Window>
            </div>
          </section>

          {/* ── CONTACT + RESUME ── */}
          <section id="contact" className="py-24 px-4 md:px-8">
            <span id="resume" />
            <SectionHeading cyan>NEW_MESSAGE.EML</SectionHeading>
            <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
              {/* mail composer */}
              <Win95Window
                title="New Message — Retro Mail 95"
                icon="📨"
                menu={["File", "Edit", "Insert", "Format", "Help"]}
                statusBar={["Connected at 56.6 Kbps", "No viruses (trust me)"]}
                className="flex-1 max-w-[620px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="p-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-[64px] text-[13px] text-right">To:</span>
                    <div className="bevel-field flex-1 px-2 py-1 text-[13px] text-[var(--w95-gray)]">
                      laundromat.game@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[64px] text-[13px] text-right">Subject:</span>
                    <input
                      className="bevel-field flex-1 px-2 py-1 text-[13px] outline-none border-0"
                      value={mailSubject}
                      onChange={(e) => setMailSubject(e.target.value)}
                    />
                  </div>
                  <textarea
                    className="bevel-field w-full h-[140px] px-2 py-1 text-[13px] outline-none border-0 resize-none font-terminal text-[16px]"
                    placeholder="Dear Rafael, I saw your radical homepage and..."
                    value={mailBody}
                    onChange={(e) => setMailBody(e.target.value)}
                  />
                  <div className="flex justify-end gap-2">
                    <Win95Button
                      className="text-[13px] font-bold"
                      onClick={() =>
                        window.open(
                          `mailto:laundromat.game@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`
                        )
                      }
                    >
                      ✉️ Send
                    </Win95Button>
                    <Win95Button className="text-[13px]" onClick={() => setMailBody("")}>
                      Discard
                    </Win95Button>
                  </div>
                </div>
              </Win95Window>

              {/* resume save-as dialog */}
              <Win95Window
                title="Save As"
                icon="💾"
                statusBar={["1 object selected", "PDF Document"]}
                className="w-full max-w-[420px] shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px]">Save in:</span>
                    <div className="bevel-field flex-1 px-2 py-1 text-[13px]">📁 Your_Company\HR\hired</div>
                  </div>
                  <div className="bevel-field h-[120px] p-3 flex flex-col items-center justify-center gap-2">
                    <span className="text-[40px]">💾</span>
                    <span className="text-[13px] font-bold">resume_rafael_matias.pdf</span>
                    <span className="font-terminal text-[14px] text-[var(--w95-gray)]">
                      1.44 MB — fits on a floppy
                    </span>
                  </div>
                  {/* TODO: drop the real CV at /public/resume.pdf */}
                  <div className="flex justify-end gap-2">
                    <a href="/resume.pdf" download>
                      <Win95Button className="text-[13px] font-bold">💾 Save</Win95Button>
                    </a>
                    <Win95Button className="text-[13px]" disabled>Cancel</Win95Button>
                  </div>
                </div>
              </Win95Window>
            </div>
          </section>
        </div>

        <Footer />
        <Taskbar />
      </div>
    </>
  );
}
