import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from './webpack.config.base.js';

export default merge(config, {
  mode: 'production',
  output: {
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
});
