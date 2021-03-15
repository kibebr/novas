const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Domine', ...fontFamily.serif],
        caps: 'Oswald'
      },
      colors: {
        categories: {
          black: colors.black,
          red: colors.red[500],
          purple: colors.purple[500],
          blue: colors.blue[500],
          yellow: colors.yellow[500],
          green: colors.green[500],
          pink: colors.pink[500]
        },
        black: {
          DEFAULT: '#000',
          light: '#111'
        }
      },
      height: {
        112: '28rem',
        128: '32rem'
      },
      width: {
        112: '28rem',
        128: '32rem'
      },
      boxShadow: {
        'side-black': '-2px 4px 0px 2px #000000'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-typography')({
      ellipsis: false,
      hyphens: false,
      kerning: true,
      textUnset: false
    })
  ]
}
