var path = require('path');
var webpack = require('webpack');
var Common = require('./webpack-common.config');

module.exports = {
  entry: [
    './source'
  ],
  output: {
    path: path.join(__dirname, '../public/assets/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV: false
    })
  ],
  module: {
    preLoaders: Common.preLoaders,
    loaders: Common.loaders
  },
  resolve: Common.resolve
};
