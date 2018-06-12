const User=require('../model/user');
const express=require('express');
const bcrypt=require('bcrypt');
const Router=express.Router;
Router.post('/register',(req,res)=>{
    let newUser=new User(req.body);
    newUser.hash_password=bcrypt.hashSync(req.body.password,10);
    newUser.save(function(err,user){
        if(err){
            return res.status(400).send({
                message: err
              });
        }else{
            user.hash_password = undefined;
            return res.json(user);
        }
    })
})
Router.post('/login',(req,res)=>{
    User.findOne({
        email:req.body.email
    },function(err,user){
        if(err) throw err;
    })
})