const express=require('express');
const app=express();
const port=process.env.PORT||3000;
const Router=express.Router();
const bodyParser = require('body-parser');
const jwtRequired=require('./middleware/jwtRequired');
const userRequired=require('./middleware/userRequired');
const router=require('./routers');
Router.get('/api',function(req,res){
    res.status(200).json([
        {module:'userModule',func:[{text:'login',path:'/login'},{text:'register',path:'/register'}]}
    ])
})
app.use(jwtRequired);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Router.use(userRequired);

Router.use('/api',router);

app.use(Router);
app.listen(port,function(){
    console.log(`Example app listening on port ${port}!`);
})