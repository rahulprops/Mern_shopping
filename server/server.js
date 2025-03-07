
import express from 'express'
import 'dotenv/config.js'
import dbConnection from './config/db.js';
import userRouter from './routers/user.router.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app=express()
const port=process.env.PORT || 3000;
//! middlewares
app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json())
app.use(cookieParser())

//! apis
app.use("/api/user",userRouter)

//! server start
app.listen(port ,()=>{
    console.log(`server is running on port : http://localhost:${port}`)
    dbConnection()
})