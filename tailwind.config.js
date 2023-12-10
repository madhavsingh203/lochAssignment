/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gradientGreen: "rgba(31, 169, 17, 0.81)",
        gradientBlue: "#2F15D0",
        gradientBlack: "rgba(0, 0, 0, 0.00)"
      }
    },
  },
  plugins: [],
}

