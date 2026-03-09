'use client';

import Image from "next/image";
import KinitoPetBackground from "./components/KinitoPetBackground";
import ModelViewer from "@/components/ModelViewer/ModelViewer"
import HeaderNavbar from "./components/HeaderNavbar";
import HeroGreeting from "./components/HeroGreeting";
import ProjectCard from "./components/ProjectCard"
import { ThemeProvider } from "styled-components";
import LogoLoop from '../components/LogoLoop';

// My Components
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCard";

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiGithub, SiFigma, SiNodedotjs, SiJavascript, SiUnity, SiDjango, SiPython } from "react-icons/si";
import {
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  Separator,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
  ProgressBar,
} from 'react95';
import styled from 'styled-components';

export default function Home() {


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiUnity />, title: "Unity 6", href: "https://unity.com" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
];

  return (
    <>
      <ThemeProvider theme={original}>
        <div id="page-content-wrapper" className="relative">
          <HeaderNavbar></HeaderNavbar>
          
          {/* Fixed Hero Section - stays in viewport. add 'fixed' to create static effect*/}
          <section id="home" className=" top-0 left-0 w-full h-screen z-0"> 
            <div className="relative w-full h-full">
              <KinitoPetBackground />
              <div id="3dModel-HeroPresentation-Wrapper" className="absolute top-[-64px] left-0 w-full h-full z-30 flex flex-row items-center justify-center overflow-hidden">
                <ModelViewer
                  url="/3d-models/avatar.glb"
                  width={650}
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
                <HeroGreeting></HeroGreeting>
              </div>
            </div>



          </section>
          <section className="w-full bg-[var(--color-gray-light)] p-4  border-[var(--color-gray-medium)]">
            <div id="skill-card-container" className="w-full h-fit mt-8 flex items-center justify-center">
               <LogoLoop
                  logos={techLogos}
                  speed={100}
                  direction="left"
                  logoHeight={60}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover={false}
                  fadeOut={false}
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
          </section>

          {/* Content that flows over the fixed hero - starts after viewport height */}
          <div className="relative z-10">
            <section id="skills" className="w-full min-h-screen bg-[var(--color-gray-light)] border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
            </section>
            
            <section id="projects" className="w-full min-h-screen bg-[var(--color-blue)] text-white border-[4px] border-[var(--color-gray-medium)] p-8">
              <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
              {/* <p className="text-lg text-center">Projects section content coming soon...</p> */}
              <span>
                <h3 className="text-2xl font-bold mb-8">Learning Projects</h3>
              <ProjectCard></ProjectCard>

                <h3>Serious Projects</h3>
              
              </span>
            </section>
            
            <section id="technologies" className="w-full min-h-screen bg-[var(--color-gray-medium)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Technologies</h2>
              <p className="text-lg text-center">Technologies section content coming soon...</p>
            </section>
            
            <section id="about" className="w-full min-h-screen bg-[var(--color-teal)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
              <p className="text-lg text-center">About section content coming soon...</p>
              <p>Hi, I'm Rafael Matias, I'm a person.</p>
              <p>We do not know each other (probably), but know that we live in the same planet and we're both going to die! :D (probably)</p>
              <p>I make stuff, like code, websites, and games, and I just learn and solve problems, thats what I do for cash.</p>
              <p>I have asperger's syndrome, I'm autistic.</p>
            </section>
            
            <section id="education" className="w-full min-h-screen bg-[var(--color-pink)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
              <p className="text-lg text-center">Education section content coming soon...</p>
            </section>
            
            <section id="experience" className="w-full min-h-screen bg-[var(--color-gray-light)] text-black border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
              <p className="text-lg text-center">Experience section content coming soon...</p>
            </section>
            
            <section id="hobbies" className="w-full min-h-screen bg-[var(--color-red)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Hobbies</h2>
              <p className="text-lg text-center">Hobbies section content coming soon...</p>
            </section>
            
            <section id="interests" className="w-full min-h-screen bg-[var(--color-orange)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Interests</h2>
              <p className="text-lg text-center">Interests section content coming soon...</p>
            </section>
            
            <section id="contact" className="w-full min-h-screen bg-[var(--color-gray-dark)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
              <p className="text-lg text-center">Contact section content coming soon...</p>
            </section>
            
            <section id="resume" className="w-full min-h-screen bg-[var(--color-gray-medium)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Resume</h2>
              <p className="text-lg text-center">Resume section content coming soon...</p>
            </section>
          </div>
          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  );
}
