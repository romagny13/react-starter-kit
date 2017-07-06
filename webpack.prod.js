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
