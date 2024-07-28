/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1A5319",
        secondary:"#508D4E",
        tertiary:"#80AF81",
        final:"#D6EFD8"
      }
    },
  },
  plugins: [],
}

