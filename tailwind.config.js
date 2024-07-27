/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        thunder: ["Thunder_LC", "serif"],
        Anton: ["Anton SC", "serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
