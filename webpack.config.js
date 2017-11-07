var path = require('path');
const webpack = require('webpack');
const outputPath = '/dist/';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, outputPath),
    filename: '[name].bundle.js',
    publicPath: outputPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
