const mongoose=require('./db');
const bcrypt = require('bcrypt');
const UserSchema=mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    },
    create:{
        type:Date,
        default:Date.now
    }

})
userSchema.methods.generateHash = function(password) {
    return bcrypt.compareSync(password,this.hash_password);
};

module.exports=mongoose.model('user',userSchema);