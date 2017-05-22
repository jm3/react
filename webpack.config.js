const path = require('path');

// necessary for CommonsChunkPlugin to work
const webpack = require('webpack');

// Simplifies the creation of HTML files to serve your webpack bundles by
// generating an HTML5 file* that includes
// all your webpack bundles in the body using script tags.
// * or uses your specified template as a starting point to generate
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  favicon: './client/favicon.png',
  inject: 'body'
})

module.exports = {
  entry: {
    main: './client/index.js',
    vendor: 'd3'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js' // or, e.g. [name].[chunkhash] for cachebusteroutput.sourceMapFilename
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader' }, // bang chains loaders!
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.(jpg|png|gif|ico)$/, loader: 'url-loader'},
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
