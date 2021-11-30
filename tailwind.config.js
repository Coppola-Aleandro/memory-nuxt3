const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  purge: {
    content: [
      // './components/**/*.{vue,js}',
      // './layouts/**/*.vue',
      // './pages/**/*.vue',
      // './plugins/**/*.{js,ts}',
      // './nuxt.config.{js,ts}',
    ],
    safelist: [
      // Use with purge
      // 'bg-blue-500, bg-green-500, bg-red-500, bg-yellow-500, bg-purple-500, bg-pink-500',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        120: '120px',
      },
    },
    fontFamily: {
      display: ['Mohave'],
      body: ['Mohave'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
