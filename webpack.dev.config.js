// DEVELOPMENT CONFIG

// {/* const BrowserSyncPlugin = require('browser-sync-webpack-plugin') */}
const webpack = require('webpack')

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
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|gif|png|obj|mat|mtl)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    devtool: '#source-map',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
  ]
  // new BrowserSyncPlugin({
    // browser: ['google chrome'],
    // files: [
      // 'craft/templates/**/*.html',
      // 'public/index.php'
    // ],
    // host: 'localhost',
    // notify: false,
    // port: 4000,
    // proxy: 'http://klamath.dev/',
    // reload: false,
    // reloadOnRestart: false,
    // xip: true
  // })
  // ],
}

module.exports = config
