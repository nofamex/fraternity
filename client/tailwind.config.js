module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#6182e3',
        yellow: '#fed058',
      },
      fontFamily: {
        fredoka: ['Fredoka One', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
