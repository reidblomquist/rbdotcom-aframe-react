// SHARED CONFIG

const PRODUCTION = (process.env.NODE_ENV === 'production')
const environmentConfig = PRODUCTION ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js')

const merge = require('deepmerge')
const path = require('path')

const baseConfig = {
  entry: [
    './src/index.js'
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8081
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

// merge() from deepmerge lib
const config = merge(baseConfig, environmentConfig)

module.exports = config
