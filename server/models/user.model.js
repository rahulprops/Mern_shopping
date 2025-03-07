import mongoose, { model, Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,

    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["customer","admin"],
        default:"customer"
    },

},{timestamps:true})
const userModel=model("user",userSchema);
export default userModel;