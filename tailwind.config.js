/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colors: {
          "0%": { color: "rgb(59 130 246)" },
          "15%": { color: "rgb(234 179 8)" },
          "30%": { color: "rgb(139 92 246)" },
          "45%": { color: "rgb(99 102 241)" },
          "60%": { color: "rgb(253 186 116)" },
          "75%": { color: "rgb(168 85 247)" },
          "90%": { color: "rgb(236 72 153)" },
        },
      },
      animation: {
        colors: "colors 20s linear infinite",
      },
    },
    plugins: [],
  },
};
