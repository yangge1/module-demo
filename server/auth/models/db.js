const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/alipay');
mongoose.connection.on('connect',()=>{
    console.log('连接MongoDb数据库成功');
})
mongoose.connection.on('error',()=>console.error('connection error:'));
mongoose.connection.once('open',()=>console.log('we\'re connected on localhost:27017\/alipay!'))
module.exports=mongoose;