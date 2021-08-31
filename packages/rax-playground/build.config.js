const WindiCSS = require('windicss-webpack-plugin').default

module.exports =  {
  targets: ['web'],
  plugins: [new WindiCSS()],
};
