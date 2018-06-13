const HtmlWebpackPlugin =require('html-webpack-plugin');
const path=require('path');
const HTMLWebpackPluginConfig =new HtmlWebpackPlugin({
    template:`client/index.html`,
    filename:'index.html',
    inject:'body'
})
const webpack=require('webpack');
module.exports={
    entry:{
        app:[path.resolve(__dirname,'./dev-client'),path.resolve('./client/index.js')]
},
    output:{
        path:`${__dirname}/dist`,
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader',

                    options: {
                        presets: ['env', 'react']
                      }
                },
                exclude:/node_modules/
            }
        ]
    },
    mode:'development',
    plugins:[
        HTMLWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}