/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      name: ['Mohave', " sans-serif"],
      body: ["Kreon", "serif"],
      welcome: ["Poppins", "sans-serif"],
    },
    height:{
      dvh:['100dvh']
    }
  },
  plugins: [],
};
