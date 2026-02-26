const purgecss = require('@fullhuman/postcss-purgecss');

// Safelist: agrega clases críticas aquí.
const SAFE_LIST = [
  // 'is-active',
  // /^js-/,
];

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.html'],
      safelist: SAFE_LIST,
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
