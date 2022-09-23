/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          bg: "#121316",
          text: "#fff",
          offset: "#181a1d",
        },
      },
    },
    plugins: [],
  },
};
