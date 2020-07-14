module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      colors: {
        primary: '#46e3b7'
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      }
    }
  },
  variants: {}
}
