module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
