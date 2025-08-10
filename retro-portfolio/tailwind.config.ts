import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': {
          'gray-light': 'var(--color-gray-light)',
          'gray-medium': 'var(--color-gray-medium)',
          'white': 'var(--color-white)',
          'blue': 'var(--color-blue)',
          'teal': 'var(--color-teal)',
          'black': 'var(--color-black)',
          'pink': 'var(--color-pink)',
        }
      },
    },
  },
  plugins: [],
};

export default config;
