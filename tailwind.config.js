/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            50: '#f1f7fd',
            100: '#dfecfa',
            200: '#c7def6',
            300: '#a0caf0',
            400: '#73ade7',
            500: '#528fdf',
            600: '#3870d1',
            700: '#3460c1',
            800: '#30509d',
            900: '#2b447d',
            950: '#1f2b4c'
          },
        }
      },
    },
    plugins: [],
  }