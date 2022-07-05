/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': "#FF8901",
        'red': "#E00404",
        'black': "#2A2A2A",
        'grey': "#8B8B8B",
      }
    },
  },
  plugins: [],
}
