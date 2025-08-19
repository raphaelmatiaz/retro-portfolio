'use client';

import Image from "next/image";
import KinitoPetBackground from "./components/KinitoPetBackground";
import ModelViewer from "@/components/ModelViewer/ModelViewer"
import HeaderNavbar from "./components/HeaderNavbar";
import HeroGreeting from "./components/HeroGreeting";
import { ThemeProvider } from "styled-components";

// My Components
import Footer from "./components/Footer";
import SkillCard from "./components/SkillCard";

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

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
  return (
    <>
      <ThemeProvider theme={original}>
        <div id="page-content-wrapper" className="relative">
          <HeaderNavbar></HeaderNavbar>
          
          {/* Fixed Hero Section - stays in viewport. add 'fixed' to create static effect*/}
          <section id="home" className=" top-0 left-0 w-full h-screen z-0"> 
            <div className="relative w-full h-full">
              <KinitoPetBackground />
              <div id="3dModel-HeroPresentation-Wrapper" className="absolute top-0 left-0 w-full h-full z-30 flex flex-row items-center justify-center overflow-hidden">
                <ModelViewer
                  url="/3d-models/avatar.glb"
                  width={550}
                  height={750}
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

          {/* Content that flows over the fixed hero - starts after viewport height */}
          <div className="relative z-10" style={{ marginTop: '100vh' }}>
            <section id="skills" className="w-full min-h-screen bg-[var(--color-gray-light)] border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
              <p className="text-lg text-center">Skills section content coming soon...</p>

              <div id="skill-card-container" className="w-full h-fit mt-8 flex items-center justify-center">
                <div
                  id="positioner"
                  className="max-w-[68%] flex items-left justify-left flex-wrap gap-4"
                >
                  <SkillCard
                    cardName="HTML5"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    comfortLevel="Solid"
                    progress={90}
                  />

                  <SkillCard
                    cardName="CSS3"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    comfortLevel="Solid"
                    progress={90}
                  />

                  <SkillCard
                    cardName="JavaScript"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    comfortLevel="Good"
                    progress={65}
                  />

                  <SkillCard
                    cardName="TypeScript"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    comfortLevel="Intermediate"
                    progress={50}
                  />

                  <SkillCard
                    cardName="Next.js"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    comfortLevel="Intermediate"
                    progress={55}
                  />

                  <SkillCard
                    cardName="React"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    comfortLevel="Good"
                    progress={65}
                  />

                  <SkillCard
                    cardName="TailwindCSS"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    comfortLevel="Good"
                    progress={65}
                  />

                  <SkillCard
                    cardName="Node.js"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    comfortLevel="Beginner"
                    progress={40}
                  />

                  <SkillCard
                    cardName="Figma"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    comfortLevel="Intermediate"
                    progress={55}
                  />

                  <SkillCard
                    cardName="Docker"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                    comfortLevel="Beginner"
                    progress={35}
                  />

                  <SkillCard
                    cardName="Python"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    comfortLevel="Beginner"
                    progress={30}
                  />

                  <SkillCard
                    cardName="Linux"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                    comfortLevel="Beginner"
                    progress={30}
                  />

                  <SkillCard
                    cardName="Git"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    comfortLevel="Good"
                    progress={60}
                  />

                  <SkillCard
                    cardName="GitHub"
                    cardImage="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    comfortLevel="Good"
                    progress={60}
                  />

                  <SkillCard
                    cardName="Unity 6"
                    cardImage="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg"
                    comfortLevel="Beginner"
                    progress={35}
                  />
                </div>
              </div>

             
              
              
            </section>
            
            <section id="projects" className="w-full min-h-screen bg-[var(--color-blue)] text-white border-[4px] border-[var(--color-gray-medium)] p-8">
              <h2 className="text-4xl font-bold mb-8 text-center section-title">Projects</h2>
              <p className="text-lg text-center">Projects section content coming soon...</p>
            </section>
            
            <section id="technologies" className="w-full min-h-screen bg-[var(--color-gray-medium)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Technologies</h2>
              <p className="text-lg text-center">Technologies section content coming soon...</p>
            </section>
            
            <section id="about" className="w-full min-h-screen bg-[var(--color-teal)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">About</h2>
              <p className="text-lg text-center">About section content coming soon...</p>
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
