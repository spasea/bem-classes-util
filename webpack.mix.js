let mix = require('laravel-mix');
const path = require("path");

mix
  // .webpackConfig({
  //   resolve: {
  //     alias: {
  //       lib$: path.resolve(__dirname, 'lib/')
  //     }
  //   }
  //   target: "node"
  // })
  // .setPublicPath('./')
  .babel('lib/index.js', './index.js')