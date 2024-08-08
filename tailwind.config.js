/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.75rem", // 12px
        base: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "2.5rem", // 40px
        "3xl": "3rem", // 48px
        "4xl": "3.5rem", // 56px
        "5xl": "4rem", // 64px
      },
      fontFamily: {
        Anton: ["Anton SC", "serif"],
        IBM: ["IBM Plex Mono", " monospace"],
      },
    },
  },
  plugins: [],
};
