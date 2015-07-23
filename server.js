var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function(error) {
  if (error) {
    console.log(error);
  }

  console.log('Color Contrast is ready at http://localhost:3000/dist/index.html');
});
