// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
module.exports = {
  lintOnSave: false,
  devServer: {
    /**
     * 这一块是devServer的配置，可以参考https://webpack.js.org/configuration/dev-server/
     * (可选，根据自己情况来设置)
     */
    open: true, //浏览器自动打开页面
    host: "192.168.1.102", //本地服务器访问的路径
    port: 8088, //本地服务器访问的端口

    /**
     * vue-cli3跨域的全配置！
     */
    proxy: {
      /**
       * (推荐这种方式)
       * 这里是域名后面需要访问的部分(最原始的跨域方式！),！
       * 跨域域名https://baike.baidu.com/后面的访问目录！
       * 在axios路径中写入/article目录下要访问的具体内容路径即可，如果：/article/d4666d640e2e478d283d8c7f.htm即可
       *
       */
      '/api': {
        //你要跨域的域名(包含host、端口号,切记：一定要带上http头);
        //同一个域名只能设置一次跨域，否则重复报错！
        // target: 'http://www.waixingren.online',
        target: 'http://localhost:8081',
        changeOrigin: true, //是否跨域，设置为true;(必须)
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
