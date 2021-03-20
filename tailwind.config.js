const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ['Domine', ...fontFamily.serif],
        caps: 'Oswald',
        barlow: 'Barlow Condensed'
      },
      colors: {
        categories: {
          black: colors.black,
          red: colors.red[100],
          purple: colors.purple[700],
          blue: colors.blue[700],
          yellow: colors.yellow[700],
          green: colors.green[700],
          pink: colors.pink[700]
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
        120: '30rem',
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
