/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass', 'sans-serif'],
      },
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(217, 12%, 63%)',
        gray: 'hsl(216, 12%, 54%)',
        blue: 'hsl(213, 19%, 18%)',
        'dark-blue': 'hsl(216, 12%, 8%)',
      }
    },
  },
}

