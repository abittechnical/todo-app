/** @type {import('tailwindcss').Config} */
const {formatRadixColorScaleForTailwind} = require("./utils/formatRadixColorScaleForTailwind.cjs");
const {slate, slateDark} = require("@radix-ui/colors");
module.exports = {
  content: ['components/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: formatRadixColorScaleForTailwind(slate),
        neutralDark: formatRadixColorScaleForTailwind(slateDark)
      },
      fontFamily: {
        sans: ['Josefin SansVariable', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
