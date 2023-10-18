/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000', 
        gray: '#535366',
        blue: '#0071DC',
        gradient: '#FF9680-#FCAC11'
      },
    },
  },
  plugins: [],
}

