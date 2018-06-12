const mongoose=require('mongoose');
const db=mongoose.connect('mongodb://localhost:27017/alipay');
db.on('error',()=>console.error('connection error:'));
db.once('open',()=>console.log('we\'re connected on localhost:27017\/alipay!'))
module.exports=mongoose;