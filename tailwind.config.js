/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1111px",
      },
      colors: {
        background: "#131418",
        primary: "#D0D0D0",
        secondary: "#B50101",
      },
    },
  },
  plugins: [],
}
