/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,tsx,ts}',
    './index.html'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]}

