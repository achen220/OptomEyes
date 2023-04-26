const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: { // NEW
    path: path.join(__dirname, 'dist'),
    filename: "main.js"
  }, 
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
    template: "./src/index.html", 
    filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};