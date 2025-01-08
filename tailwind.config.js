/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgb(1, 117, 79)',
      },
    },
  },
  plugins: [],
}
