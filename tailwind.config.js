/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1DB954",
          bg: "#e8ecef",
          text: "#262626",
          offset: "#181a1d",
        },
      },
    },
    plugins: [],
  },
};
