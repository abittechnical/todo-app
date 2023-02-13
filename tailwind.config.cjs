/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['components/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin SansVariable', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
