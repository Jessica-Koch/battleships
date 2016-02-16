var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "babel-polyfill",
        "./src/styles/main.styl",
        "./src/main",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        publicPath: "/",
        filename: "main.js"
    },
    debug: true,
    devtool: "source-map",
    devServer: {
        contentBase: "./src"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                },
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
            { 
                test: /\.styl$/, 
                loader: "style-loader!css-loader!stylus-loader"
            }
        ],
        resolve: {
            extensions: ["", ".js", ".styl"],
            modulesDirectories: ["src", "node_modules"]
        }
    }
};