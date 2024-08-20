import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        200: "#c8ddfc",
        300: "#e7f0fe",
        600: "#afc1dc",
        800: "#88919f",
      },
      secondary: {
        200: "#f4d6e1",
        300: "#fff3f8",
        600: "#b297a1",
        800: "#825f6b",
      },
      neutral: {
        600: "#727a86",
        800: "#3c4148",
        900: "#2b3138",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
