/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        gold:'url(assets/img/gold.jpg)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
      colors: {
        default: "#171717",
        caYellow: "rgb(255, 192, 70)",
      },
      grayscale: {
        50: '50%',
      },
    },
  },
  plugins: [],
};
