const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        //added .jsx to webpack
        test: /\.jsx?/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // {
      //   test: /scss$/,
      //   exclude: /node_modules/,
      //   loaders: ['style-loader', 'css-loader', 'sass-loader'],
      // }, //we added this for sass
    ],
  },
  devServer: {
    allowedHosts: ['http://localhost8080'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};
// publicPath: '/build',
// proxy: {
//   '/api': 'http://localhost:3000'
// }
