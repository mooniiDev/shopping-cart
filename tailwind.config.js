/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rampart: ['Rampart One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'tropical-indigo': '#9E8AD6',
        'persian-pink': '#E88FC2',
        'light-green': '#90E8AA',
        'davys-gray': '#4D4D4D',
      },
    },
  },
  plugins: [],
};
