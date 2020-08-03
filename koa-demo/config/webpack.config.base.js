const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackNodeExternals = require('webpack-node-externals')
const Webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use:{
          loader: 'babel-loader'
        },
        exclude: [path.resolve(__dirname, '../node_modules')]
      }
    ]
  },
  externals: [WebpackNodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'devlopment'"
      }
    })
  ],
  node: {
    console: true,
    global: true,
    process: true,
    Buffer: true, 
    __filename: true,
    __dirname: true,
    setImmediate: true,
    path: true
  }
}