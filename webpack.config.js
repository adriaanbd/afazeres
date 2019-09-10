const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: '/.scss$/',
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates css to CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
    ],
  },
};
