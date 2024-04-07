/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sycamore': {
          '50': '#f7f7ee',
          '100': '#edecda',
          '200': '#dddbb9',
          '300': '#c7c68f',
          '400': '#b1b16a',
          '500': '#96974e',
          '600': '#74763a',
          '700': '#585b30',
          '800': '#484a2a',
          '900': '#3e4027',
          '950': '#202211',
      },
      
      }
    },
  },
  plugins: [],
}

