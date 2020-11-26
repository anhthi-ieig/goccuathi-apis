const webpackNodeExternals = require('webpack-node-externals');

const appPath = require('./app-path.config');

module.exports = {
  entry: appPath.main,
  output: {
    path: appPath.publicDir,
    filename: 'main.js'
  },
  target: 'node',
  externals: [
    webpackNodeExternals()
  ],
};