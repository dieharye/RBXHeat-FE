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
      },
      white: "#fff",
      secondary: {
        100: "rgba(163, 191, 224)",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-bar":
          "linear-gradient(90deg, rgba(255, 59, 46, 0.00) 0%, #FF3B2E 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
