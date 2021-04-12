const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Volkhorn', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
