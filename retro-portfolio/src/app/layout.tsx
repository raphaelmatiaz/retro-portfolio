import type { Metadata } from "next";
import "./globals.css";

import { Press_Start_2P, VT323 } from "next/font/google";

// Chunky pixel font for headings — pure CRT arcade energy
const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

// Terminal font for address bars, counters, green-on-black text
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "RafaelMatias.dev",
  description: "Rafael Matias - Web Developer, Indie Game Developer, and Tech Enthusiast. Welcome to my portfolio showcasing my projects, skills, and passion for technology. Explore my work and connect with me to see how I can bring your ideas to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable}`}>
      <body>
        {children}
        {/* CRT scanlines + vignette over the whole experience */}
        <div className="crt-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
