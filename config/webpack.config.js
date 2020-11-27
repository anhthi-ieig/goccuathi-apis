const NodemonPlugin = require('nodemon-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appPath = require('./app-path.config');

/**
 * Plugins
 */

const nodemonPlugin = new NodemonPlugin();
const cleanPlugin = new CleanWebpackPlugin();
const dotenv = new Dotenv();

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
    nodemonPlugin,
    cleanPlugin,
    dotenv
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
