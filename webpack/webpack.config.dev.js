const path = require('path');
const root = process.cwd();

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
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(root, 'src') },
    ]
  }
};
module.exports = config;
