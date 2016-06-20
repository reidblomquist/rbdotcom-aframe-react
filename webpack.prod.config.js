// PROD CONFIG

const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StringReplacePlugin = require("string-replace-webpack-plugin")
const WebpackStripLoader = require('strip-loader')

const config = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'babel'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: WebpackStripLoader.loader('console.log')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|gif|png)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, 'build'),
    devtool: '#source-map',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.ejs',
      title: 'The Locker'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),

    new ExtractTextPlugin('application.min.css'),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /(\.js|\.css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    require('cssnano')({})
  ]
}

module.exports = config
