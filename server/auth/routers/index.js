const express=require('express');
const Router=express.Router();

const UserRoute=require('./user');

Router.use('/user',UserRoute);
module.exports=Router;