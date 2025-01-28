/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "serif"],
      inter: ["Inter", "serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
