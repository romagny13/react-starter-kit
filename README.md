# React Starter kit

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

## Memento (Steps)

### 1. Create package.json
```
npm init -f
```

### 2. Babel

```
npm i babel-cli babel-loader babel-preset-latest babel-preset-react -D
```

loaders
```
npm i css-loader style-loader file-loader url-loader -D
```
### 3. Create ".babelrc"
```
{
  "presets": ["react","latest"]
}
```

### 4. React

```
npm i react react-dom react-router -S
```
Redux

```
npm i redux react-redux redux-thunk -S
```

### 5. Create "src" and "dist" directories
with "src/main.js"

### 6. Test
Mocha
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

### 7. Karma
Create "karma.conf.js"
```
karma init
```
With Mocha
```
npm i karma karma-mocha karma-phantomjs-launcher karma-webpack -D
```

singleRun .. true

### 8. Webpack
```
npm i  webpack webpack-dev-server -D
```

### 9. NPM Scripts
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

### 10. Build
Rollup
```
npm i rollup rollup-plugin-buble uglify-js -D
```
Create directory "build" with rollup configuration


### 11. Editor config

Create file ".editorconfig"

http://editorconfig.org/ 

Editor : Visual Studio Code

### 12. esLint
```
npm i eslint eslint-plugin-import eslint-watch -D
```
Create eslint configuration file
```
eslint --init
```

+ extension: esLint for Visual Studio Code

### 13. CI
Travis

Create ".travis.yml"

### 14. LICENSE MIT

### 15. gitignore
