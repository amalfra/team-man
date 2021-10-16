const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = 'dist';

module.exports = {
  entry: './src/app',
  output: {
    path: path.join(__dirname, outputPath),
    filename: '[name].bundle.js',
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: path.join(__dirname, outputPath),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
