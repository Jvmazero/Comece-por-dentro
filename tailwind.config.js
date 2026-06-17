






/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        neulis: ['"Neulis Cursive"', 'Neulis', 'cursive', 'sans-serif'],
        modernline: ['Modernline', 'cursive'],
      },
      colors: {
        // BRAND PRIMARY: Soft Lilac (#c0b3ef) — used as the main brand tone
        sage: {
          50: '#f8f6fd',
          100: '#f0ecfa',
          200: '#e3dcf5',
          300: '#d0c5f1',
          400: '#c0b3ef', // ⭐ THE brand color
          500: '#a796e6',
          600: '#8f7adc',
          700: '#7860d0',
          800: '#5f4ab0',
          900: '#3a2d6e',
        },
        // Warm neutrals — body text #555555
        stone: {
          50: '#fbfaf8',
          100: '#f5f3ef',
          200: '#e9e6df',
          300: '#d4cfc5',
          400: '#a8a299',
          500: '#7a766e',
          600: '#555555',
          700: '#444444',
          800: '#333333',
          900: '#222222',
        },
        // Lilac aliases
        lilac: {
          50: '#f8f6fd',
          100: '#f0ecfa',
          200: '#e3dcf5',
          300: '#c0b3ef',
          400: '#a796e6',
          500: '#8f7adc',
        },
        // Mint (verde claro) — strong supporting accent
        mint: {
          50: '#f6faf1',
          100: '#ebf3df',
          200: '#d4e6c3',
          300: '#b8d39e',
          400: '#9bc079',
          500: '#7da55d',
        },
        // Soft blue — secondary accent
        skyblue: {
          200: '#cfdcec',
          300: '#a9c2dc',
          400: '#8aabd0',
          500: '#678cbd',
        },
      }
    },
  },
  plugins: [],
}






