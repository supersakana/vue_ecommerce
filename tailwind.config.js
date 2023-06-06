/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      },
      backgroundImage: {
        // 'main': "url('/src/assets/bg1.svg')",
        'main': "",
      }
    },
  },
  plugins: [],
}

