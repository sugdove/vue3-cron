const path = require('path')
const resolve = (relativePath) => path.join(__dirname, relativePath)
module.exports = {
  // 解决打包出来还有vue实例的问题
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : './', // 开发环境与生产环境的区分
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('~', resolve('packages'))
    config.module
      .rule('eslint')
      .exclude.add(path.resolve('lib'))
      .end()
      .exclude.add(path.resolve('examples/docs'))
      .end()
      
    config.module
      .rule('js')
      .include
      .add('/packages/')
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
};