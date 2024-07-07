/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "./src/*.vue", "./src/App.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#F96D37",
        secondary: "#F5F5F5",
        neutral: "#7E8492",
        success: "#33AB50",
        danger: "#EB5757",
        red: "#D91F11",
        white: "#FFFFFF",
        black: "#000000",
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
};
