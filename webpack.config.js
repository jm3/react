const webpack = require('webpack'); // necessary for CommonsChunkPlugin to work
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: {
    main: './client/index.js',
    vendor: 'd3'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js' // or, e.g. [name].[chunkhash] for cachebuster
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader' }, // bang chains loaders!
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(jpg|png)$/, loader: 'url-loader'},
      { test: /\.js$/,   loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/,  loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  resolve: {
    // permits require('file') instead of 'file.js'
    extensions: ['.css', '.less', '.js', '.json', '.jsx']
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ]
}
