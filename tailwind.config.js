/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* WhatNow purple */
        'primary': {
          100: '#d0cadb',
          200: '#baadd0',
          300: '#a491c5',
          400: '#8f74bb',
          500: '#7958b0',
          600: '#633BA5',
          700: '#411d7d',
          800: '#2c105c',
          900: '#160533',
        },
        /* WhatNow gray */
        'secondary': {
          100: '#e6e6e6',
          200: '#d3d3d3',
          300: '#b6b6b7',
          400: '#98999b',
          500: '#7a7c7f',
          600: '#5c5f63',
          700: '#3C4247',
          800: '#20252b',
          900: '#02080f',
        },
    },
      // ...
    },
  },
  plugins: [],
}