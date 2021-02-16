const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '0auto': '0 auto'
      },
      height: {
        '500px': '500px',
        '600px': '600px'
      },
      minWidth: {
        '64': '16rem'
      },
      colors: {
        'pink-shock': '#FD345A',
        'green-shock': '#35FD96'
      }
    },
    colors: {
      ...defaultTheme.colors,
      black: '#111'
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}
