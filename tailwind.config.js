/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#52784f",
          bg: "#fdf7f2",
          text: "#040403",
        },
      },
    },
    plugins: [],
  },
};
