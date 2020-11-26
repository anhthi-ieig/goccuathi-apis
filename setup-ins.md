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

# 3. Setup Webpack
  - `npm i webpack webpack-cli webpack-node-externals -D`
  - Implement [app-path.config.js]
  - Implement [webpack.config.js]
  - Add `start` and `build` commands to [package.json]