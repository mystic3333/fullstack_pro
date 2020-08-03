const WebpackBaseConfig = require('./webpack.config.base')
const WebpackMerge = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { SplitChunksPlugin } = require('webpack')


const WebpackProdConfig = WebpackMerge(WebpackBaseConfig, {
  mode: 'production',
  state: { children: false, warnings: false },
  optimization: {
    minimizer: [new TerserWebpackPlugin({
      terserOptions: {
        warnings: false,
        compress: {
          warnings: false,
          drop_console: false,
          dead_code: true,
          drop_debugger: true,
        },
        output: {
          comments: false,
          beautify: false,
        },
        mangle: true,
      },
      parallet: true,
      sourceMap: fasle,
    })],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        }
      }
    }
  }

})