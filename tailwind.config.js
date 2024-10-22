/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      "roboto": ['Roboto', 'sans-serif'],
      "gajraj": ['Gajraj One', 'sans-serif'],
      "rufina": ['Rufina', 'sans-serif'],
      "poppins": ['Poppins', 'sans-serif'],
      "robotoslab": ['Roboto Slab', 'sans-serif'],
    },
    screens: {
      'xs': {'max': '540px'},
      'sm': {'max': '640px'},
      'md': {'max':'768px'},
      '900px': {'max':'900px'},
      'lg': {'max':'1024px'},
      'xl': {'max': '1279px'},
      '2xl': {'max': '1440px'},
    }}},
  plugins: [],
}