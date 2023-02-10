/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : 'Poppins',
        ' sans-serif' : ' sans-serif'
      },
      colors : {
        'background' : '#fffffe',
        'secondary' : '#d1d1e9',
        'danger' : '#e45858',
        'header' : '#2b2c34',
        'button' : '#6246ea'
      }
    },
  },
  plugins: [],
}
