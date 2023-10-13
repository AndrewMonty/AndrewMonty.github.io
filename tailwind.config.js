/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.md',
    './**/*.svg',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans Pro"', 'ui-sans-serif', 'system-ui'],
        'display': ['"Roboto Slab"', '"Arial Black"']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
