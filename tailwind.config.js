
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '1024px',

      'lg': '1440px',
    },
    extend: {
      backgroundImage:{
        'bgSimplify-Sec-Mob': "url('/src/Assets/images/bg-simplify-section-mobile.svg')",
        

        'bgSimplify-Sec-Tab': "url('/src/Assets/images/bg-tablet-pattern.svg')",

        'bgSimplify-Sec-Desk': "url('/src/Assets/images/bg-simplify-section-desktop.svg')"
      },
      colors: {
        'bright-red': '#f25f3a',
        'dark-bue':'#242d52',
        'dark-grayish-blue':'#9095a7',
        'very-dark-blue':'#1d1e25',
        'very-pale-red':'#ffefeb',
        'very-light-gray':'#fafafa'
      },
      fontFamily: {
        beVietnam:['Be Vietnam Pro']
      }
    },
  },
  plugins: [ ],
});

