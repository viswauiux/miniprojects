/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 8px 30px -8px rgba(0, 0, 0, 0.3)',
      },
      width: {
        '800': '800px',
      },
     
      backgroundColor:{
        "gradient":"linear-gradient(180deg, rgba(217, 217, 217, 0.68) 0%, rgba(217, 217, 217, 0.25) 100%);"
      },
      fontSize:{
        "2xs":'10px'
      }

    },
  },
  plugins: [],
}