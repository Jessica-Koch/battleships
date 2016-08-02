var path = require("path"),
    webpack = require("webpack"),
    buildPath = path.resolve(__dirname, "build"),
    mainPath = path.resolve(__dirname, "src", "main.js");

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/styles/main.styl",
        mainPath,
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    debug: true,
    devtool: "source-map",
    devServer: {
        contentBase: "./src"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, "src"),
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            },
            exclude: [
                path.resolve(__dirname, "node_modules")
            ]
        }, {
            test: /\.styl$/,
            loader: "style-loader!css-loader!stylus-loader"
        }],
        resolve: {
            extensions: ["", ".js", ".styl"],
            modulesDirectories: ["src", "node_modules"]
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            "THREE": "three"
        })
    ]
};