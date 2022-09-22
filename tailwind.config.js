/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#52784f",
          bg: "#dbe1c7",
          text: "#000000",
          offset: "#f4d2eb",
        },
      },
    },
    plugins: [],
  },
};
