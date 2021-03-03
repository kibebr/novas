const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Domine', ...defaultTheme.fontFamily.serif],
        caps: 'Oswald'
      },
      colors: {
        black: {
          DEFAULT: '#000',
          light: '#111'
        }
      },
      height: {
        '112': '28rem',
        '128': '32rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
