module.exports = {
    entry: {
        javascript: "./src/test-app.js",
        html: "./src/test-app.html"
    },
    output: {
        path: "./dist",
        filename: "test-app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "es2015"
                    ]
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};
