# React Starter Kit

_Last update: 04/07/17_

## Alternative

Use [create-react-app](https://github.com/facebookincubator/create-react-app) (+ "npm run eject" to see configuration)


## Usage

```
npm i
npm run dev
```
Go http://localhost:8080/

Test (Karma + PhantomJS)
```
npm run test
```

Lint (esLint)
```
npm run lint
```

Build (Webpack or Rollup)
```
npm run build:webpack
npm run build
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

### Babel

```
npm i babel-cli babel-loader babel-preset-latest babel-preset-react -D
```
Loaders:
* (babel-loader)
* css-loader
* style-loader
* file-loader
* url-loader
* json-loader

```
npm i css-loader style-loader file-loader url-loader json-loader -D
```

.babelrc

```
{
  "presets": ["react","latest"]
}
```

### React

```
npm i react react-dom -S
```

React-Router
```
npm i react-router -S
```

Redux
```
npm i redux react-redux redux-thunk -S
```

Create "src" + "dist" + index.js 

### Test

#### Mocha

```
npm i chai mocha -D
```

types
```
npm i @types/chai @types/mocha -D
```

React
```
npm i enzyme react-addons-test-utils nock redux-mock-store -D
```

#### Karma

karma.conf.js
```
karma init
```
Mocha + PhantomJS + patterns ('test/index.js' and 'src/**/*.spec.ts')

With Mocha
```
npm i karma karma-mocha karma-phantomjs-launcher karma-webpack -D
```

Add preprocessors (karma.conf.js):
```
'test/index.js': ['webpack'],
'src/**/*.spec.ts': ['webpack']
```

Add webpack
```js
webpack: {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: [/node_modules/], use: "babel-loader" }
        ]
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react-addons-test-utils': true,
        fs: '{}'
    },
    node: {
        fs: 'empty'
    },
},

webpackMiddleware: {
    stats: {
        colors: true
    }
},
```
Set singleRun to true (karma.conf.js)

#### Create tests

Create "test" directory + index.js

```js
require('./first.spec');
```

Create test files. Example 'first.spec.js'
```js
import { assert } from 'chai';

describe('Test', () => {
    it('Should work', () => {
        let hello = 'hello!';
        assert.equal(hello, 'hello!');
    });
});
```

Run test:
```
npm run test
```

### Webpack

```
npm i  webpack webpack-dev-server -D
```

Create webpack.config.js

### NPM Scripts

```
npm i cross-env -D
```

In development
```
npm run dev
```

Test
```
npm run test
```

Lint
```
npm run lint
```

```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --inline --hot",
    "build:webpack": "cross-env NODE_ENV=production webpack --progress --hide-modules",
    "build": "node build/build.js",
    "lint": "esw src --color",
    "lint:watch": "npm run lint -- --watch",
    "test": "karma start"
  },
  ```

Build with Rollup
```
npm i rollup rollup-plugin-buble uglify-js -D
```
Create directory "build" with rollup configuration

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

### esLint
```
npm i eslint eslint-plugin-import eslint-watch -D
```

With React
```
npm i eslint-plugin-react -D
```

Create eslint configuration file
```
eslint --init
```

+ extension: esLint for Visual Studio Code

### Travis

.travis.yml
```
language: node_js
node_js:
  - "6"
```

### LICENSE 
MIT

### .gitignore