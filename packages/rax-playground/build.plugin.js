
const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.plugin('windicss').use(WindiCSS);
  });
};
