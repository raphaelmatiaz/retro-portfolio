

import Image from "next/image";
import KinitoPetBackground from "./components/KinitoPetBackground";
import ModelViewer from "@/components/ModelViewer/ModelViewer"

export default function Home() {
  return (
    <div id="page-content-wrapper" className="min-h-screen bg-white p-8 mw max-w-screen" style={{ backgroundColor: 'var(--color-white)' }}>
      <section className="hero">
      <div style={{ position: "relative" }}>
        <KinitoPetBackground />
        <div className="absolute bottom-20 left-80 z-30 flex flex-row items-center justify-center">
          <ModelViewer
            // url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            // url="/3d-models/0988e36f-1d49-4dd5-bec1-87a439a65399.glb"
            url="/3d-models/avatar.glb"
            width={550}
            height={750}
            enableManualZoom={false}
            showScreenshotButton={false}
            enableManualRotation={false}
            defaultRotationX={250}
            defaultRotationY={0}
            defaultZoom={1.5}
            // style={{ zIndex: 10, position: "absolute", top: 0, left: 0 }}
          />
      <div className="w-200 h-100 bg-gray-400 z-500">
        <p className="text-4xl">Hi, <br></br> I'm Rafael Matias <br></br> I'm a Junior Web Developer and Indie Game Developer</p></div>
        </div>
      </div>
      </section>
    </div>
  );
}
