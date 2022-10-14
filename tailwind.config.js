/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tx: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "80%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
      },
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
