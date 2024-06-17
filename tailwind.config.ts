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
        100: "#0A1428",
        200: "#FF4236",
        300: "#08142C",
        400: "#0D1830",
        500: "#012169",
        600: "#0C172E",
        700: "#0E1930",
        800: "#b92219",
      },
      blue:{
        100: "#2E50FF",
        200: "#0d1a38",
        500: "#15162D",
      },
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      secondary: {
        100: "rgba(163, 191, 224)",
        200: "rgba(143, 170, 220, 0.4)",
        300: "rgba(41, 40, 67, 0.3)"
      },
    },
    extend: {
      backgroundImage: {
        "gradient-bar":
          "linear-gradient(90deg, #2E50FF00 0%, #2E50FF 100%)",
        "gradient-bar-v":
          "linear-gradient(0deg, #2E50FF00 0%, #2E50FF 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
