const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
                                                      template: __dirname + "/src/index.html",
                                                      filename: "index.html",
                                                      inject: "body"
                                                      });

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
  loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css/, loader: 'style-loader!css-loader' },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'inline-source-map'
};
