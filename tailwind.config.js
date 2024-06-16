/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gold: 'url(assets/img/gold.jpg)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-2deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(2deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(2deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-2deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-2deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(2deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-2deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s infinite ease',
        bounce: 'bounce 2s infinite',
        shake: 'shake 1s infinite',
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