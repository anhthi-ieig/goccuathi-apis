const fs = require('fs');
const path = require('path');

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
  index: path.join(rootDir, 'index.js'),
  publicDir: path.join(rootDir, 'public'),
  sourceDir: path.join(rootDir, 'src')
};
