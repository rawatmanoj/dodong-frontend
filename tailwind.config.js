/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        darkteal: {},
        orange: {
          50: "#FFF5E6",
          100: "#FFDFB0",
          200: "#FFD08A",
          300: "#FFBA54",
          400: "#FFAD33",
          500: "#FF9800",
          600: "#E88A00",
          700: "#B56C00",
          CC7A00: "#CC7A00",
          593500: "#593500",
        },
        neutral: {
          50: "#E9EBF8",
          100: "#D8D8D8",
          200: "#C5C5C5",
          300: "#AAAAAA",
          400: "#999999",
          500: "#808080",
          600: "#747474",
          700: "#5B5B5B",
        },
        'profile-back': "linear-gradient(180deg, #FFF5E6 0%, #FFFFFF 100%)",
        734400: "#734400",
        trending: {
          background: "#FFF0D9",
          icon: "#E64A19",
        },
      },
    },
    backgroundImage: {
      'profile-back': "linear-gradient(180deg, #FFF5E6 0%, #FFFFFF 100%)",
    }
  },
  plugins: [],
};
