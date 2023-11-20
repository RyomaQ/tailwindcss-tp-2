/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue": "#1C85E8",
      },
      spacing: {
        "12": "12px",
        "400": "400px",
      },
      borderWidth: {
        '12': '12px',
      },
    },
  },
  plugins: [],
}
