const express=require('express');
const app=express();
const webpack=require('webpack');
const webpackConfig=require('./webpack.config.js');
const compiler=webpack(webpackConfig);
const proxyMiddleware = require('http-proxy-middleware')
const devMiddleware=require('webpack-dev-middleware')(compiler,{
    publicPath:'/',
    quiet: true
})
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
  })
  app.use(proxyMiddleware('/api', {target:'http://localhost:3000', changeOrigin: true}))
  app.use(devMiddleware)
  app.use(hotMiddleware)
  app.use(require('connect-history-api-fallback')())

  app.listen(8080)