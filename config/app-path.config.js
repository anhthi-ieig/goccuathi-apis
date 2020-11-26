const fs = require('fs');
const path = require('path');

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
  main: path.join(rootDir, 'main.js'),
  publicDir: path.join(rootDir, 'public')
};