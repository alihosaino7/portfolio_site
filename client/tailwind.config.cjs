/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(273, 88%, 51%)",
        "primary-hover": "hsla(273, 88%, 51%, .8)",
        "trans-white": "hsla(0, 0%, 100%, 0.15)",
        "trans-black": "hsla(0, 0%, 0%, 0.15)",
        "trans-white-hover": "hsla(0, 0%, 100%, 0.30)",
        "trans-black-hover": "hsla(0, 0%, 0%, 0.15)",
        "light": "hsl(216, 12%, 84%)",
        "dark": "hsl(216, 12%, 16%)",
        "main-bg-dark": "hsl(0, 3%, 7%)",
        "main-bg-light": "hsl(0, 3%, 93%)"
      }     
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
  },
  plugins: [],
}