/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        default:"#171717",
        caYellow:"rgb(255, 192, 70)"
      },
      grayscale: {
        50: '50%',
      }
    },
  },
  plugins: [],
}
