// const { override, addWebpackAlias } = require('customize-cra');
// const path = require('path');

// module.exports = override(
//   // 设置别名，此处设置后还需要设置tsconfig
//   addWebpackAlias({
//     '@': path.resolve(__dirname, 'src'),
//     utils: path.resolve(__dirname, 'src/utils'),
//     components: path.resolve(__dirname, 'src/components'),
//     store: path.resolve(__dirname, 'src/store')
//   })
// );

const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { "@": path.resolve(__dirname, "src") }
  };

  return config;
};
