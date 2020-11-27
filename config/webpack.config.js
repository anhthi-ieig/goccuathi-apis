const webpackNodeExternals = require('webpack-node-externals');

const appPath = require('./app-path.config');

module.exports = {
  entry: appPath.main,
  output: {
    path: appPath.publicDir,
    filename: 'index.js'
  },
  target: 'node',
  externals: [
    webpackNodeExternals()
  ],
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      }
    ]
  }
};
