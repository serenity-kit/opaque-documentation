/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      gray: {
        100: "#FDFDFD",
        120: "#FAFAFC",
        150: "#F5F5F7",
        200: "#EDEDF0",
        300: "#DCDDE5",
        400: "#CBCBD3",
        500: "#B4B4BD",
        600: "#8A8B96",
        700: "#666771",
        800: "#4F5057",
        900: "#1F1F21",
      },
      primary: {
        100: "#ECEEFF",
        150: "#DDE1FE",
        200: "#CDD3FC",
        300: "#9DAAFD",
        400: "#7083FA",
        500: "#435BF8",
        600: "#2B44E4",
        700: "#172FC8",
        800: "#0A1E9B",
        900: "#000F70",
      },
      palette: {
        terracotta: "#EF5245",
        coral: "#FD7064",
        raspberry: "#F4216D",
        rose: "#FF91C9",
        honey: "#FFB921",
        orange: "#FF7D2E",
        emerald: "#47C07A",
        arctic: "#4ABAC1",
        sky: "#1E8EDE",
        serenity: "#435BF8", // primary 500
        lavender: "#515DCE",
        purple: "#9E36CF",
        slate: "#4F5D78",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)'
      }
    },
  },
  plugins: [],
}

