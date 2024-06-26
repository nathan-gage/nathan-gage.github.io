/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    listStyleType: {
      none: "none",
      circle: "circle",
      decimal: "decimal",
    },
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        title: ["Arimo", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        blue: "#64b5f6",
        white: "#ffffff",
        black: "#121212",
      },
    },
  },
  plugins: [],
};
