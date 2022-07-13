const mongoose= require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required :false,
        // unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id") 
            }
        }
        // validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }]
    },
    phone:{
        type:Number,
        require:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    }
})


// We need a collection
const User = mongoose.model("User",userSchema);

module.exports = User;