import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Plus-Jakarta-Sans": ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        background: "#131418",
        primary: "#D0D0D0",
        secondary: "#B50101", 
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
