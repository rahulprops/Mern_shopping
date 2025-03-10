import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import userModel from '../models/user.model.js';
export const authUser=async (req,res,next)=>{
    const {token}=req.cookies;
    // console.log(token)
    if(!token){
        return res.status(400).json({message:"not authorized"})
    }

    const decode=  jwt.verify(token,process.env.jwt)
    
    if(!decode){
        return res.status(404).json({message:"token not verify"})
    }
    
    const isUser=await userModel.findById(decode.userId)
    if(!isUser){
        return res.status(404).json({message:"not verify user"})
    }
    // console.log(isUser)
    req.userId=isUser._id;
    next()
}

export const admin=async (req,res,next)=>{
    const userId=req.userId;
    try {
        const isUser=await userModel.findById(userId)
        // console.log(isUser)
        if(isUser.role.toString()==="admin"){
            next()
        }else{
            return res.status(400).json({message:"admin not role"})
        }
    } catch (err) {
        return res.status(500).json({message:`server error ${err.message}`})
    }
}