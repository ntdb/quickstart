const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'public/',
  hot: true,
  historyApiFallback: true,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(3000, 'localhost', function cb(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000: ');
});
