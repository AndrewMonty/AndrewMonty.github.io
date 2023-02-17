/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_site/assets/**/*.svg',
    './_site/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'],
        'display': ['"Roboto Slab"', '"Arial Black"']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
