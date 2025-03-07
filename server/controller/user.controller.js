import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt'
import validator from 'validator'
//! user register
export const register =async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            message:"all feilds requied"
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            message:"please enter valid email"
        })
    }
    try {
        // check user exists on not
        const isUser=await userModel.findOne({email})
        if(isUser){
            return res.status(400).json({
                message:"user alreay exists"
            })
        }
        // password hash
           const hashPass= await bcrypt.hash(password , 12)

           // create user
           const user=new userModel({
            name,email,password:hashPass
           })
           if(user){
                await user.save()
                return res.status(201).json({
                    message:"user create sucessful",
                    data:user
                })
           }else{
            return res.status(400).json({
                message:"user create faild"
            })
           }
        console.log('register')
    } catch (error) {
       return res.status(500).json({
        message:`server error ${error.message}`
       }) 
    }
}
//! user login
export const login =async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({
            message:"all fields requied"
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            message:"please enter valid gmail"
        })
    }
    try {
        const isUser=await userModel.findOne({email})
        if(!isUser){
            return res.status(404).json({
                message:"user not found this email"
            })
        }

        // check password
        const checkPass=await bcrypt.compare(password ,isUser.password)
        if(checkPass){
            return res.status(200).json({
                message:"login sucessful"
            })
        }else{
            return res.status(400).json({
                message:"please enter valid paswwrod"
            })
        }
    } catch (error) {
       return res.status(500).json({
        message:`server error ${error.message}`
       }) 
    }
}