/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          bg: "#f2ece4",
          text: "#000",
          offset: "#181a1d",
          border: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    plugins: [],
  },
};
