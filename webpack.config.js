// entry -> output

const path = require('path');   // imports path

module.exports = {
    entry: './src/app.js',  // file to input
    output: {
        path: path.join(__dirname,'public'),    // concatenates current path with 'public' - requires absolute path
        filename: 'bundle.js'   // output file name
    },   // file to output
    module: {
        rules: [{
            loader: 'babel-loader', // allows babel to be run under certain conditions - to convert ES6 to ES5 classes, and JSX to Javascript
            test: /\.js$/, // Regular expression for files ending in .js
            exclude: /node_modules/ // excludes imported production code
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },        // module used to setup loaders
    devtool: 'cheap-module-eval-source-map',    // enable source map in browser
    devServer: {
        contentBase: path.join(__dirname,'public'), // enable dev server
        historyApiFallback: true, // Allows for client-side routing - should return index.html for all 404's.
    }
};