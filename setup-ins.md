# 1. Git clone and init project
# 2. Create project structure
  - config
    - app-path.config.js
    - webpack.config.js

  - src
    - base
      - error.base.js
      - service.base.js
      - validator.base.js

    - core
      - middleware.js

    - entities
      - ...

    - global
      - constants.js

    - [main.js]
    - [.babelrc]
    - [.eslintrc]
    - [.eslintignore]
    - [jsconfig.json]
    - [.env]

# 3. Setup Webpack
  - `npm i webpack webpack-cli webpack-node-externals -D`
  - Implement [app-path.config.js]
  - Implement [webpack.config.js]
  - Add `start` and `build` commands to [package.json]

# 4. Setup Babel
  - `npm i @babel/core @babel/node @babel/plugin-transform-modules-commonjs @babel/plugin-proposal-class-properties babel-loader -D`
  - Implement [.babelrc]
  - Add `babel-loader` to [webpack.config.js]

  [Reference]
  - `@babel/node`: works the same as the Node.js CLI, compile with Babel presets and plugins before running
  - `@babel/plugin-transform-modules-commonjs`:  transforms ECMAScript modules to CommonJS
  - `@babel/plugin-proposal-class-properties`: allow to define properties in class

# 