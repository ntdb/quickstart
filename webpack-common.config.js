// Use this file for config options that should be uniform
// between webpack environment configs

var path = require('path');

module.exports = {
  loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
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
    }
  ],
  resolve: {
    root: path.join(__dirname, 'source'),
    extensions: ['', '.js', '.jsx', '.scss']
  }
};
