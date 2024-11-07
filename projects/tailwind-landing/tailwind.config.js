/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'Playfair Display',serif",
        lato:"'Lato',sans-serif"
      }
    },
  },
  plugins: [],
}

