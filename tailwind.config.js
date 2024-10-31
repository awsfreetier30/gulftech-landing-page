/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gulftech: {
          purple: '#6B68AC',
          turquoise: '#68C1C4',
          lightBlue: '#1ABBDF',
          green: '#48C94F',
          navy: '#003566',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};