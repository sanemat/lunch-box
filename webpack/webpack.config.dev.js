const path = require('path');
const root = process.cwd();

const config = {
  entry: {
    bundle: "./src/entry.js",
  },
  output: {
    filename: path.join('[name].js'),
    path: path.join(root, 'docs'),
    publicPath: ''
  },
  module: {
    loaders: [
    ]
  }
};
module.exports = config;
