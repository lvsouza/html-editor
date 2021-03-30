const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './../src/app.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './../public/index.html'
    }),
    new SourceMapDevToolPlugin({
      filename: "index.map"
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    host: '0.0.0.0',
    port: 3000,
  }
}
