import type { Metadata } from "next";
import "./globals.css";

// import { PressStart2P } from "next/font/google"

// const PressStart2PFont = PressStart2P({
//   subsets: ["latin"],
//   weight: 400,
// });

import { Geist } from 'next/font/google'
 
const geist = Geist({
  subsets: ['latin'],
})

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
    <html lang="en" className={geist.className}>

        <body>
          {children}
        </body>
    </html>
  );
}
