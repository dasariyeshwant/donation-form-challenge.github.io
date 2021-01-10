var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'main_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                // test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            }
        ],
    },  
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};