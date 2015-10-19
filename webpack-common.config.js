// Use this file for config options that should be uniform
// between webpack environment configs

var path = require('path');

module.exports = {
  preLoaders: [
    {
      test: /\.js$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, 'source/scripts')
    },
    {
      test: /\.scss$/,
      loader: 'scss-lint-loader',
      include: path.join(__dirname, 'source/styles')
    },
  ],
  loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'source/scripts')
    },
    {
      test: /\.scss$/,
      loaders: [
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
    extensions: ['', '.js', '.scss', '.css', '.png', '.jpg', '.jpeg', '.svg', '.woff', '.otf', '.ttf']
  }
};
