import type { Metadata } from "next";
import "./globals.css";

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

        <body>
          {children}
        </body>
    </html>
  );
}
