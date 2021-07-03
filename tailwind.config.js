const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: " 0px 1px 2px rgba(206, 169, 169, 0.25)",
      none: "none",
    },
    backgroundColor: (theme) => ({
      primary: "#191818",
      secondary: "#FFFFFF",
      border: "#C5BFBF",
      danger: "#e3342f",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
