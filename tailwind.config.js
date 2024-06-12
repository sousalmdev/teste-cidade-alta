/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        default:"#171717",
        caYellow:"rgb(255, 192, 70)"
      }
    },
  },
  plugins: [],
}
