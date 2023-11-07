module.exports = {
  plugins: [
    require('postcss-import')({
        addModulesDirectories: ["css"]
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};
