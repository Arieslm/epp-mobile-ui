
const path = require('path')
module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'publish') {
      return {
          entry: './src/static/common.js',
          output: {
              filename: 'index.js',
              chunkFilename: '[name].js',
              libraryTarget: 'commonjs2'
          },
      }
    } else {
      // 为开发环境修改配置...
    }
  }
}
