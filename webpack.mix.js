let mix = require('laravel-mix');

mix
  .webpackConfig({
    resolve: {
      extensions: ['.ts']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: ['babel-loader', 'ts-loader']
        }
      ]
    },
    output: {
      library: "Classes",
      libraryExport: "default",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
  })
  .ts('lib/index.ts', './')