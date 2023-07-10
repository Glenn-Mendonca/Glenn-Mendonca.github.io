import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-primary": "#ffffff",
        "light-secondary": "#e6e6e6",
        "dark-primary": "#151515",
        "dark-secondary": "#202022",
      },
      screens: {
        xs: "425px",
        ...defaultTheme.screens,
      },
      grayscale: {
        0.2: "20%",
      },
    },
  },
  plugins: [],
};
