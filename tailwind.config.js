/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.jsx',
  './src/**/*.css'],
  theme: {
    extend: {colors: {
      red: {
        450: '#FE5860', // Example hex color between red-400 and red-500
      },
     
    },},
  },
  plugins: [],
}

