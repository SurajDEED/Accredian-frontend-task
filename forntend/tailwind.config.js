/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0C1844',
        darkBlue: '#1B1A55',
        darkerBlue: '#030637',
        back: '#f5f5f5'

      },
      screens: {
        'xs': '200px',

      },
    },
  },
  plugins: [],
}