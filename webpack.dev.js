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
        { test: /\.(js|jsx)$/, exclude: [/node_modules/], use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
},
resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        'my-lib': path.resolve(__dirname, './src')
    }
},
devServer: {
    contentBase: './example/es6',
    historyApiFallback: true,
    noInfo: true
},
devtool: 'source-map'
};