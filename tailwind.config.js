const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Whitney', 'Open Sans', ...defaultTheme.fontFamily.sans],
        title: ['Ginto', 'Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#5866F2',
        gray: {
          50: '#ECEDEE',
          100: '#DCDDDE',
          200: '#B9BBBE',
          300: '#8E9297',
          400: '#72767D',
          500: '#5C6067',
          600: '#464950',
          700: '#36393F',
          800: '#2F3136',
          900: '#202225',
        },
      },
    },
  },
  plugins: [],
};
