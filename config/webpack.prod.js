const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './../src/app.ts',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'index.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './../public/index.html'
    })
  ]
}
