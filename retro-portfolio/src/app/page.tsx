'use client';

import Image from "next/image";
import KinitoPetBackground from "./components/KinitoPetBackground";
import ModelViewer from "@/components/ModelViewer/ModelViewer"
import HeaderNavbar from "./components/HeaderNavbar";
import HeroGreeting from "./components/HeroGreeting";
import { ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

export default function Home() {
  return (
    <>
      <ThemeProvider theme={original}>
    
        <div id="page-content-wrapper" className="min-h-screen bg-white mw max-w-screen" style={{ backgroundColor: 'var(--color-white)' }}>
          <HeaderNavbar></HeaderNavbar>
          <section className="hero absolute top-0">
            <div style={{ position: "relative" }}>
              
              <KinitoPetBackground />
              <div id="3dModel-HeroPresentation-Wrapper" className="absolute top-0 left-50 z-30 flex flex-row items-center justify-center overflow-x-hidden max-w-screen">
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
              <section id="skills" className="w-screen h-screen max-w-screen min-w-screen bg-[var(--color-gray-light)] border-[4px] border-[var(--color-gray-medium)]"></section>
            </div>
          </section>
        </div>
      </ThemeProvider>
    </>
  );
}
