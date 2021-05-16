const tailwindcss = require('tailwindcss');
const purgeCSS = require('@fullhuman/postcss-purgecss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        purgeCSS({
            content: [
             './src/**/*.tsx'
            ],
            css: ['./src/**/*.css']
          })
    ],
};
