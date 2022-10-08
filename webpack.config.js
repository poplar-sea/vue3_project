const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // 环境模式
    entry: path.resolve(__dirname, './src/main.js'), // 打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: 'js/[name].js' // 打包完的静态资源文件
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 vue 开发环境'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ]
}