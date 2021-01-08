module.exports = {
    publicPath:process.env.NODE_ENV === 'production'?'./':'/',
    configureWebpack: {
        devServer: {
            proxy: {
                '/detai': {
                    target: 'https://interface.music.163.com/weapi/v6/playlist/',
                    changeOrigin: true
                }
            }
        }
    }
}