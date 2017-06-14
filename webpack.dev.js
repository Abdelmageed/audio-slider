const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['env']
            }
        }
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;