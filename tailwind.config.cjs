/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin SansVariable', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
