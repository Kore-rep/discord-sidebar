/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "gray-darkest": '#1e2124',
        "gray-darker": '#282b30',
        "gray-dark": '#36393e',
        "gray-light": '#424549',
        "accent-purple": '#7289da'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

