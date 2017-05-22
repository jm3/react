const path = require('path');

// necessary for CommonsChunkPlugin to work
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Simplifies the creation of HTML files to serve your webpack bundles by
// generating an HTML5 file* that includes
// all your webpack bundles in the body using script tags.
// * or uses your specified template as a starting point to generate
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  favicon: './client/favicon.png',
  inject: 'body' // place JS resources at the bottom of the body element
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
      // find all require()'d or import'ed (plain) CSS files,
      // wrap them in JS objects, and inject them at the end
      // of BODY as if they were JS files.
      // not a great idea, but easy and automatic.
      { test: /\.css$/,  loader: 'style-loader!css-loader' }, // bang chains loaders!

      // find all required LESS files and bundle them together as a style file
      // (which HtmlWebpackPlugin will add a reference to in our HEAD)
      { test: /.less$/,   loader: ExtractTextPlugin.extract({ use: ['css-loader', 'less-loader'] })},

      // NOTE: url-loader inlines small assets (< 20k) as data-URIs and uses file-loader (or something like it) on the rest, basically.
      { test: /\.(jpg|png|gif|ico)$/, loader: 'url-loader?limit=20000'},

      // bundle web fonts; the name=.. spec places them in a fonts/ subdirectory when bundling,
      // which should NOT matter when referencing them, but is simply cleaner
      {test: /\.(woff|woff2|eot|ttf|otf)$/, loader: 'file-loader?name=fonts/[name].[ext]'},

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
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  ]
}
