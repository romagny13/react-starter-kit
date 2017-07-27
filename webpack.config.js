var path = require('path'),
    webpack = require('webpack');

var version = require('./package.json').version;
var isProd = process.env.NODE_ENV === 'production';

var banner =
    '/*!\n' +
    ' * MyLib v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' myname\n' +
    ' * Released under the MIT License.\n' +
    ' */';

var plugins = [];
plugins.push(new webpack.BannerPlugin({
    banner: banner,
    raw: true,
    entryOnly: true,
}));

if (isProd) {
    plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false,
        sourceMap: false
    }));
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist",
        filename: isProd ? 'my-lib.min.js' : 'my-lib.js',
        libraryTarget: 'umd',
        library: 'MyLib'
    },
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: [/node_modules/], use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: plugins
};
