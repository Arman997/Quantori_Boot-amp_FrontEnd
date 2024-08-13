/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'custom-color' : '#66837E',
      },
      screens:{
        'sm': '450px',
        'md': '768px',
      },
    },
  },
  plugins: [],
}

