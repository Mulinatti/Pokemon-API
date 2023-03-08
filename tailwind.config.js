/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "type": "47.5%",
      },
      fontFamily: {
        "nunito": ["Nunito, sans-serif"],
      }
    },
  },
  plugins: [],
}
