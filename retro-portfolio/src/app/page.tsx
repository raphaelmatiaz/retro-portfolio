'use client';

import KinitoPetBackground from "./components/KinitoPetBackground";
import Win95Button from "./components/Win95Button";

// import ModelViewer from "@/components/ModelViewer/ModelViewer"

// Add this instead:
import dynamic from "next/dynamic";
const ModelViewer = dynamic(() => import("@/components/ModelViewer/ModelViewer"), {
  ssr: false,
  loading: () => null, // or a placeholder
});

import HeaderNavbar from "./components/HeaderNavbar";
import HeroGreeting from "./components/HeroGreeting";
import ProjectCard from "./components/ProjectCard"
import LogoLoop from '../components/LogoLoop';

//ShadCN Components
import { AsciiArt } from "@/components/ui/ascii-art";

// My Components
import Footer from "./components/Footer";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiGit, SiGithub, SiFigma, SiNodedotjs, SiJavascript, SiUnity, SiDjango, SiPython, SiBlender } from "react-icons/si";


export default function Home() {


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
  { node: <SiBlender />, title: "Unity 6", href: "https://www.blender.org/" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
];

  return (
    <>
        <div id="page-content-wrapper" className="relative">
          <HeaderNavbar></HeaderNavbar>

          <Win95Button></Win95Button>
          
          {/* Fixed Hero Section - stays in viewport. add 'fixed' to create static effect*/}
          <section id="home" className=" top-0 left-0 w-full h-screen z-0"> 
            <div className="relative w-full h-full">
              <KinitoPetBackground />
              <div id="3dModel-HeroPresentation-Wrapper" className="absolute top-[-64px] left-0 w-full h-full z-30 flex flex-row items-center justify-center overflow-hidden">
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

          <section id="about" className="w-full min-h-screen bg-[var(--color-teal)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
            <div className="flex">
              {/* <div className="flex-1 bg-[var(--color-blue)] h-128 pl-64"> */}
                <div className='flex-1'>
                  <div id="text-wrapper" className="pl-32 py-8">
                    <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                    <p className="text-lg px-32 leading-[1.5rem] mb-4"> Hello there!👋 <br /> I’m Rafael Matias — a modern day wizard. I write strange things in weird languages and make digital magic happen!</p>
                    <p className="text-lg px-32 leading-[1.5rem] mb-4"> More seriously: I'm a web developer with 3 years of experience based in Algarve, Portugal. Driven by a fascination for the invisible world that drives our modern society. <br /> I'm continuously learning how technology works beneath the surface, and tinkering with websites and applications. I like turning ideas into working systems and express my creativity through problem solving.</p>
                    <p className="text-lg px-32 leading-[1.5rem] mb-4">Outside of development, I’m also a classicly trained musician, an artist and an Indie Game Developer which influences the way I approach projects — combining structure, creativity, and attention to detail.</p>
                  </div>
                </div>
              {/* </div> */}
              <div id="photo" className=" w-10 flex-1 flex items-center justify-center">
                {/* <AsciiArt
                  src="/images/cv-pic-3.png"
                  resolution={226}
                  color="var(--color-white)"
                  animationStyle="fade"
                  animationDuration={1.5}
                  animateOnView={false}
                  className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"
    /> */}
              </div>
            </div>
           
          </section>

            <section id="skills" className="w-full min-h-screen bg-[var(--color-gray-light)] border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
            </section>
            
            <section id="projects" className="w-full min-h-screen bg-[var(--color-blue)] text-white border-[4px] border-[var(--color-gray-medium)] p-8">
              <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>

            <div style={{ height: '600px', position: 'relative' }}>

            </div>
             
              <span>
                <h3 className="text-2xl font-bold mb-8 text-center">Learning Projects (for fun and learning 😎)</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  <ProjectCard
                    projectSummary="A simple web app that generates absurd memes by combining randomized stock images with randomized english words."
                    projectName="Absurd Meme Generator"
                    projectImage="/images/meme-generator.webp"
                    projectNumber={1}
                    projectTechnologies={["HTML", "CSS", "JavaScript"]}
                    projectFeatures={["Procedural meme generation", "«Download Meme» Button"]}
                    projectCtaText="Generate a fun meme!"
                    projectCtaLink="https://raphaelmatiaz.github.io/Absurd-Meme-Generator/"
                    projectGithubLink="https://github.com/raphaelmatiaz/Absurd-Meme-Generator"
                  ></ProjectCard>
                  <ProjectCard
                    projectSummary="A web app that creates minimalist randomized abstract art. Based on the JavaScript math.random method, input settings allow you to explore the output and create unique patterns."
                    projectName="Abstract Art Generator"
                    projectImage="/images/art-generator.webp"
                    projectNumber={1}
                    projectTechnologies={["HTML", "CSS", "JavaScript"]}
                    projectFeatures={["Generate Meme Button", "Download Meme Button"]}
                    projectCtaText="Create some crazy art!"
                    projectCtaLink="https://raphaelmatiaz.github.io/Abstract-Art-Generator/"
                    projectGithubLink="https://github.com/raphaelmatiaz/Abstract-Art-Generator"
                  ></ProjectCard>
                  <ProjectCard
                    projectSummary="A narrative focused, choices matter, text-based indie game inspired by the 'Dark Souls' game series. Played entirely inside the terminal. Its the first game I ever created!"
                    projectName="ETIC Souls"
                    projectImage="/images/etic-souls.webp"
                    projectNumber={1}
                    projectTechnologies={["Python"]}
                    projectFeatures={["Custom character creation","Logical tree of choices and their consequences", "Ascii art UI"]}
                    projectCtaText="View Installation Instructions"
                    projectCtaLink="https://github.com/raphaelmatiaz/ETIC-SOULS"
                    projectGithubLink="https://github.com/raphaelmatiaz/ETIC-SOULS"
                  ></ProjectCard>
                  <ProjectCard
                    projectSummary="Bombr is a social network platform designed as a simplified Instagram clone with a unique twist: users can only and exclusively post content (bomb!) on their friends' profiles instead of their own."
                    projectName="Bombr"
                    projectImage="/images/bombr.webp"
                    projectNumber={1}
                    projectTechnologies={["TypeScript", "React", "CSS", "Next.js",]}
                    projectFeatures={["Login / Register / Logout","Google, Discord and Github OAuth methods", "Homepage Feed", "Post pictures, gifs and text on your friends profiles", "Personal Profile for each user", "Home, User Search, Post, Notifications and profile routes", "Responsive Design (mobile / tablet / desktop)"]}
                    projectCtaText="Watch a Video Showcase!"
                    projectCtaLink="https://www.youtube.com/watch?v=b_NQkbWEgDk&t=1s"
                    projectGithubLink="https://github.com/raphaelmatiaz/Bombr"
                  ></ProjectCard>
                </div>

                <h3 className="text-2xl font-bold mb-8 text-center mt-64">Serious Projects (oouh Very Serious  🧐)</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  <ProjectCard
                    projectSummary="A technical challenge consisting in the design refactor and its code implementation, for a 2 sided marketplace SAAS platform."
                    projectName="LicitaNow (interview challenge)"
                    projectImage="/images/licita-now.webp"
                    projectNumber={1}
                    projectTechnologies={["HTML", "CSS", "JavaScript"]}
                    projectFeatures={["Figma ReDesign", "Responsive Design (mobile, tablet, desktop)"]}
                    projectCtaText="View my Solution!"
                    projectCtaLink="https://raphaelmatiaz.github.io/LicitaNowChallenge/"
                    projectGithubLink="https://github.com/raphaelmatiaz/LicitaNowChallenge"
                  ></ProjectCard>
                  <ProjectCard
                    projectSummary="An indie 3D puzzle platformer game, set in an uncanny laundromat, with unique puzzle gameplay and mechanics, mainly inspired by the 'Portal' game series. With pshichological horror mood and a Nietzchean-Lovecraftian metaphorical narrative, LAUNDROMAT is my very first commercially aimed game, currently in development by solo developer: me! 🙂"
                    projectName="LAUNDROMAT"
                    projectImage="/images/laundromat.webp"
                    projectNumber={1}
                    projectTechnologies={["C#", "Unity Engine 6"]}
                    projectFeatures={["3D Player Controller", "Gravity flipper", "Levitation of objects", "Numerous puzzle mechanics (pressure plates, buttons...)","Diverse enviroment hazards to mess with the player", "Original Soundtrack", "Original story", "...and many other things that would fill the whole page if I listed them all..."]}
                    projectCtaText="Wishlist the game on Steam!"
                    projectCtaLink="https://store.steampowered.com/app/3936500/Laundromat/"
                    projectInstagramLink="https://www.instagram.com/laundromat_game/"
                  ></ProjectCard>
                </div>
              </span>
            </section>
            
            <section id="technologies" className="w-full min-h-screen bg-[var(--color-gray-medium)] text-white border-[4px] border-[var(--color-gray-medium)] p-8 section-title">
              <h2 className="text-4xl font-bold mb-8 text-center">Technologies</h2>
              <p className="text-lg text-center">Technologies section content coming soon...</p>
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
    </>
  );
}
