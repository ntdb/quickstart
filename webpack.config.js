var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      "./app/entry.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    noInfo: true,
    contentBase: "build/"
  },
  module: {
    loaders: [
      { test: /\.sass$/, loader: 'style!css!sass?indentedSyntax' }
    ]
  }
};
