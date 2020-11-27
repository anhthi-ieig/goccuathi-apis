const NodemonPlugin = require('nodemon-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

const appPath = require('./app-path.config');

/**
 * Plugins
 */

const nodemonPlugin = new NodemonPlugin();

/**
 * Config
 */

module.exports = {
  entry: appPath.index,
  output: {
    path: appPath.publicDir,
    filename: 'index.js'
  },
  target: 'node',
  plugins: [
    nodemonPlugin
  ],
  externals: [
    new NodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
