const webpack = require('webpack');

module.exports = {
    // 禁止eslint
    lintOnSave: false,
    configureWebpack: {
        plugins: [
            // 配置jquery为$和jQuery通配符
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            }),
        ]
    }
};
