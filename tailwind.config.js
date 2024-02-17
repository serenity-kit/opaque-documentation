export const colors = {
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
  surface: {
    primary: "#FFFFFF",
    secondary: "#FDFDFD",
    tertiary: "#EDEDF0",
    border: "#EDEDF0",
  },
  text: {
    title: "#000000",
    primary: "#1F1F21",
    secondary: "#4F5057",
    tertiary: "#8A8B96",
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
  dark: {
    primary: {
      400: "#8091FF",
      500: "#6576E1",
    },
    surface: {
      primary: "#1F1F21",
      secondary: "#2B2B2D",
      tertiary: "#353538",
      border: "#44454B",
    },
    text: {
      title: "#FFFFFF",
      primary: "#EDEDF0",
      secondary: "#EDEDF0",
      tertiary: "#B4B4BD",
    },
  },
  protocol: {
    amber: {
      100: "#FFFBF0",
      200: "#FFF1C1",
      300: "#FFE992",
      400: "#FFD84D",
      500: "#FFC60A",
      600: "#E6B509",
      700: "#997806",
      800: "#735A05",
      900: "#4D3C03",
    },
    emerald: {
      100: "#F0FFF4",
      200: "#C6F6D5",
      300: "#A7EBB8",
      400: "#34D399",
      500: "#10B981",
      600: "#059669",
      700: "#047857",
      800: "#065F46",
      900: "#064E3B",
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.tsx",
  ],
  darkMode: "class",
  theme: {
    colors: { ...colors },
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
      },
      fontSize: {
        h1: ["2rem", "2.375rem"],
        h2: ["1.5rem", "1.75rem"],
        h3: ["1.125rem", "1.375rem"],
        sm: ["0.8125rem", "130%"], // 13px
        display1: ["3.875rem", "120%"],
        display2: ["3rem", "120%"],
        display3: ["2.5rem", "120%"],
        display4: ["1rem", "120%"],
        mobile1: ["2.5rem", "120%"],
        mobile2: ["2rem", "120%"],
        mobile3: ["1.5rem", "120%"],
      },
      fontWeight: {
        dodrantbold: 650,
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        xs: "400px",
      },
      borderWidth: {
        3: "3px",
      },
      gridTemplateColumns: {
        footer: "2.5fr 2fr auto",
      },
    },
  },
  plugins: [],
};
