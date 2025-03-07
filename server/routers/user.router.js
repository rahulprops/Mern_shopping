import express from 'express'
import { register } from '../controller/user.controller.js';
const userRouter=express.Router()

//! apis
userRouter.post("/register",register)

export default userRouter;