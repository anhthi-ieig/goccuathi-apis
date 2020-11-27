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
    - [jsconfig.json]
    - [.env]

# 3. Setup Webpack
  - `npm i webpack webpack-cli webpack-node-externals nodemon-webpack-plugin -D`
  - Implement [app-path.config.js]
  - Implement [webpack.config.js]
  - Add `start` and `build` commands to [package.json]

# 4. Setup Babel
  - `npm i @babel/core @babel/node @babel/plugin-transform-modules-commonjs @babel/plugin-proposal-class-properties babel-loader -D`
  - Implement [.babelrc]
  - Add `babel-loader` to [webpack.config.js] module rules

  [Reference]
  - `@babel/node`: works the same as the Node.js CLI, compile with Babel presets and plugins before running
  - `@babel/plugin-transform-modules-commonjs`:  transforms ECMAScript modules to CommonJS
  - `@babel/plugin-proposal-class-properties`: allow to define properties in class

# 5. Setup ESLint
  - `npm i eslint babel-eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import -D`
  - Implement [.eslintrc]
  - Add `eslint-loader` to [webpack.config.js] module rules
  - Add `lint` and `lint:fix` commands to [package.json]

  [Reference]
  - `babel-eslint`: allows you to lint ALL valid Babel code with ESLint
  - `eslint-config-airbnb-base`: an extensible shared config from Airbnb.
  - `eslint-plugin-import`: required by `eslint-config-airbnb-base`
  - Grant ESLint permission by clicking ESLint icon on the bottom right

# 6. Path Resolver
  - `npm i babel-plugin-module-resolver -D`
  - Update [.babelrc]
  - Implement [jsconfig.json]
  - Add `import/resolver` to [.eslintrc] settings

# 7. Install dotenv-webpack, clean-webpack-plugin
  - `npm i dotenv-webpack clean-webpack-plugin -D`

# 8. Install Mongoose, Express, Joi
  - `npm i mongoose express joi`
  - Add `DB_ADDRESS` and `PORT` to [.env]
  - Implement [index.js]