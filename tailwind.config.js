/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          bg: "#fcf5f3",
          text: "#010101",
          offset: "#181a1d",
        },
      },
    },
    plugins: [],
  },
};
