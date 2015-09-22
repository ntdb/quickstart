// Use this file for config options that should be uniform
// between webpack environment configs

var path = require('path');

module.exports = {
  preLoaders: [
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    },
  ],
  loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loaders: [
        'scss-lint-loader',
        'style-loader',
        'css-loader',
        'autoprefixer-loader?browsers=last 2 version',
        'sass-loader'
      ],
      include: path.join(__dirname, 'source/styles')
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader'
      ],
      include: path.join(__dirname, 'source/styles')
    },
    {
      test: /\.(png|jpg|jpeg|svg|woff|otf|ttf)$/, loader: 'url-loader?limit=8192'
    }
  ],
  resolve: {
    root: path.join(__dirname, 'source'),
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg', '.woff', '.otf', '.ttf']
  }
};
