/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backcolor: '#9fc6db',
        clockcolor: '#eb6866',
        login: '#8256D8',
        black: '#000000'
      },
      screens: {
        
        '3xl': '1870px',
        
        'desktop': '1280px',
        
      },
      scale: {
        '134': '1.345',
        '165': '1.65',
        '155': '1.55',
        '265': '2.65',
      }
    },
    fontFamily:{
      'Rajhdhani' : ['Rajhdhani']
    }
  },
  plugins: [],
}
