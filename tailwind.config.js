/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: [
          "Satoshi Regular",
          "Satoshi Light",
          "Satoshi Medium",
          "Satoshi Bold",
          "Satoshi Black",
        ],
      },
      screens: {
        laptop: "1400px",
        mobile: '600px'
      },
    },
  },
  plugins: [],
};
