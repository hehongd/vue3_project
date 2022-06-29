const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    //定义http代理服务器
    devServer: {
        proxy: {
            //暗号
            '/api': {
                //   真实服务器地址
                target: `http://localhost:5050`,
                //是否跨域
                changeOrigin: true,
                //重写路径
                pathRewrite: {
                    //用正则找到路径中的暗号，替换为""
                    '^/api': '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
                }
            }
        }
    },
    transpileDependencies: true
})