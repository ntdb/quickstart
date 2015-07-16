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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ["react-hot", "babel"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loaders: [
          "style-loader",
          "css-loader",
          "autoprefixer-loader?browsers=last 2 version",
          "sass-loader?indentedSyntax"
        ],
        include: path.join(__dirname, "source/styles")
      }
    ]
  },
  resolve: {
    root: path.join(__dirname, "source"),
    extensions: ["", ".js", ".jsx", ".sass"]
  }
};
