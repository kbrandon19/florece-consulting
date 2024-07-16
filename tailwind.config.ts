import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      white: "#ffffff",
      black: "#0A0A0A",

      charcoal: "#353A47",
      lavender: "rgb(236,222,232)",
      seaSalt: "#FAF9F9",
      cambridgeBlue: "#89B0AE",
      purple: "rgba(179,123,164,1)",

      
      mintGreen: "#3AAFB9",

      // Form Colors
      'red-400':'#EF5350',
      'blue':'rgb(59 130 246)'


      // orchid: "rgb(249,244,232)",
      // "gray-light": "#dedede",
      // "primary-payneGray": "#555B6E",

      // "accent-appricot": "#FFD6BA",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
