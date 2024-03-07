/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'startgradient' : '#FFCFA7',
        'endgradient' : '#F0A200',
        'borderstart' : '#FDDA53',
        'borderend' : '#808AF6',
      }
    },
  },
  plugins: [],
}
