const WebpackBaseConfig = require('./webpack.config.base')
const WebpackMerge = require('webpack-merge')

const WebpackDevConfig = WebpackMerge(WebpackBaseConfig, {
  mode: 'development',
  devtool: 'dev-source-map',
  state: {
    children: false
  }
})

module.exports = WebpackDevConfig