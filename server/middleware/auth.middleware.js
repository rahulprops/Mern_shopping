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