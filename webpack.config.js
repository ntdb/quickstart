var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./source/entry.jsx"
  ],
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: true,
    contentBase: "build/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ["react-hot", "babel"] },
      {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax",
        include: path.join(__dirname, "source/styles")
      }
    ]
  }
};
