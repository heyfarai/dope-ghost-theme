const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
    screens: {
      'sm': '600px',
      'md': '800px',
      'lg': '1000px',
    },
      extend: {
        gridTemplateColumns: {
          'errythang': '20px 1fr 20px',
          'errythang-mid': '50px 1fr 50px',
          'errythang-lg': '50px minmax(auto, 1050px) 50px'
        },
        fontFamily: {
          'sans': ['"Figtree"', ...defaultTheme.fontFamily.sans],
        },

        fontWeight: {
          thin: '100',
          hairline: '100',
          extralight: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          'extra-bold': '800',
          black: '900',
        },
        fontSize: {
          sm: ['14px', '20px'],
          base: ['clamp(22px, 3.5vw, 26px)', '1.15'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
        },}
  },
  plugins: [
      require('@tailwindcss/typography')
  ]
}