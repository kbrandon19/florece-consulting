import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors:{
      'white':'#ffffff',
      'blurple':'rgb(149,6,228)',
      'purple':'rgba(179,123,164,1)',
      'orchid':'rgb(249,244,232)',
      'charcoal':'#353A47',
      'lavender':'rgb(236,222,232)',
      'gray-light':'#dedede',

      'black': '#0A0A0A',
      'primary-payneGray':'#555B6E',
      'sec-cambridgeBlue':'#89B0AE',
      'seaSalt':'#FAF9F9',
      'accent-appricot':'#FFD6BA',
      'mintGreen':'#BEE3DB',
      'mnBlue':'#4F5C87'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // gridTemplateRows:{
      //   3:'repeat(3, 1fr 2fr 1fr)',
      //   4:'repeat(4, auto)',
      // },
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
} satisfies Config

export default config