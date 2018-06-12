const User=require('../model/user');
const express=require('express');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Router=express.Router();
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
        if(!user){
            res.status(401).json({ message: 'Authentication failed. User not found.' });
        }else if(user){
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
              }
        }
    })
})
module.exports=Router;