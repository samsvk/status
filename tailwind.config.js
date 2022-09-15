/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#52784f",
          bg: "#fdf7f2",
          text: "#242426",
          offset: "#f4d2eb",
        },
      },
    },
    plugins: [],
  },
};
