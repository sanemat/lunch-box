const path = require('path');
const root = process.cwd();
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  entry: {
    bundle: [
      'babel-polyfill',
      path.join(root, './src/entry.js'),
    ],
  },
  output: {
    filename: path.join('[name].js'),
    path: path.join(root, 'docs'),
    publicPath: ''
  },
  plugins: [
    new BrowserSyncPlugin({
      server: "docs"
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], include: path.join(root, 'src') },
      { test: /\.css$/, loaders: ['style', 'css'], include: path.join(root, 'src') },
      { test: /\.html$/, loaders: ['html'], include: path.join(root, 'src') },
      { test: /\.(jpg|png)$/, loaders: ['url'], include: path.join(root, 'src') }
    ]
  }
};
module.exports = config;
