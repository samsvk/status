/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tx: {
          "0%": {
            transform: "translateY(150px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        scale: {
          "0%": {
            transform: "scale(1.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        leading: {
          "0%": {
            lineHeight: "1.8",
          },
          "100%": {
            lineHeight: "1.3",
          },
        },
        leadingImage: {
          "0%": {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
          "100%": {
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          },
        },
        clip: {
          "0%": {
            clipPath: "polygon(0 0, 0 0, 0 0, 0 0);",
          },
          "100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
        },
      },
      colors: {
        spotify: {
          green: "#1DB954",
          bg: "#000",
          text: "#fff",
          offset: "#0d0d0d",
        },
      },
    },
    plugins: [],
  },
};
