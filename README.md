# React Starter Kit

> Ultra light version with Jest

_Last update: 11/09/17_

* React 16.1
* Webpack 3.0

## Alternative

Use [create-react-app](https://github.com/facebookincubator/create-react-app) (+ "npm run eject" to see configuration)

## Usage

Install dependencies

```
npm i
```

* Dev (run example)

```
npm run dev
```
Go http://localhost:8080/

* Build

To create a dist directory with bundles
```
npm run build:dist
```

To create a lib directory with CommonJS format
```
npm run build:lib
```


* Test
```
npm t
```

* eslint
```
npm run lint
```

## Install React Router and Redux

React-Router
```
npm i react-router -S
```

Redux
```
npm i redux react-redux redux-thunk -S
```

And for tests
```
npm i redux-mock-store -D
```

## Memento

### Before

Install globally

```
npm i karma cross-env eslint -g
```
VS Code Extensions:
* esLint for Visual Studio Code

### package.json
```
npm init -f
```

### Webpack + React + Babel

* Webpack

```
npm i webpack -D
```

Babel

```
npm i babel-cli babel-loader babel-preset-env babel-preset-stage-2  -D
```

* React

```
npm i react react-dom prop-types -S
```

preset for React

```
npm i babel-preset-react -D
```

* .babelrc

```json
{
  "presets": [
    "env",
    "stage-2",
    "react"
  ]
}
```

### Build

Plugins (minification, etc.)

```js
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'mylib.min.js',
        libraryTarget: 'umd',
        library: 'MyLib'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};
```

NPM Script

```json
"scripts": {
    "build": "webpack --config webpack.prod --progress --hide-modules"
}
```

```
npm run build
```

### Dev Server

```
npm i webpack-dev-server -D
```

```js
var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './example/es6/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: './example/es6',
        historyApiFallback: true,
        noInfo: true
    },
    devtool: "#eval-source-map"
};

```

NPM Script
```json
"scripts": {
    "dev": "webpack-dev-server --config webpack.dev --open --inline --hot"
},
```

```
npm run dev
```

### Test (Jest)

* [Documentation](https://facebook.github.io/jest/)
* [expect](https://facebook.github.io/jest/docs/expect.html) 
* [Enzyme](http://airbnb.io/enzyme/)

```
npm i enzyme enzyme-adapter-react-16 -D
npm i jest react-test-renderer react-addons-test-utils -D
```
.babelrc
```
{
  "presets": [
    "env",
    "stage-2",
    "react"
  ]
}
```
NPM Script
```
 "test": "jest"
```

Configuration package.json
```json
"jest": {
    "testEnvironment": "node",
    "transform": {
      "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js"
    }
  }
```

* [eslint plugin](https://www.npmjs.com/package/eslint-plugin-jest)

to run `npm t`

### Editor config

Create file ".editorconfig"

http://editorconfig.org/ 

Editor : Visual Studio Code

```
# http://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

### eslint
```
npm i eslint eslint-plugin-import eslint-watch -D
npm i babel-eslint -D
```

With React
```
npm i eslint-plugin-react -D
```

Create eslint configuration file
```
eslint --init
```

+ extension: eslint for Visual Studio Code

### Travis

.travis.yml
```js
language: node_js
node_js:
  - "6"
```

### LICENSE 
MIT

### .gitignore