/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(235, 100%, 58%)",
          50: "hsl(235, 100%, 88%)",
          100: "hsl(235, 100%, 86%)",
          200: "hsl(235, 100%, 81%)",
          300: "hsl(235, 100%, 76%)",
          400: "hsl(235, 100%, 71%)",
          500: "hsl(235, 100%, 66%)",
          600: "hsl(235, 100%, 58%)",
          700: "hsl(235, 100%, 44%)",
          800: "hsl(235, 100%, 33%)",
          900: "hsl(235, 100%, 22%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grenzeGotisch: ["Grenze Gotisch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
