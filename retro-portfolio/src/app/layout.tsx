import type { Metadata } from "next";
import "./globals.css";
// import { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

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
    <html lang="en">

        <body className="font-win95">
          {children}
        </body>
    </html>
  );
}
