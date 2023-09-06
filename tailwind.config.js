/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        GroundZero: 'rgb(251,246,2)',
        HammerTech: 'rgb(17,103,229)',
        Motefareghe: 'rgb(255,255,255)',
        SoundDigital: 'rgb(237,28,36)',
        Pioneer: 'rgb(169,2,48)',
      },
      fontFamily: {
        IranianSans: ['IranianSans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
