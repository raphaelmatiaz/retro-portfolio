import Image from "next/image";
import KinitoPetBackground from "./components/KinitoPetBackground";

export default function Home() {
  return (
    <div id="page-content-wrapper" className="min-h-screen bg-white p-8 mw max-w-screen" style={{ backgroundColor: 'var(--color-white)' }}>
      <KinitoPetBackground/>
    </div>
  );
}
