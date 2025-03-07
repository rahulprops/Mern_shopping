
import express from 'express'
import 'dotenv/config.js'
import dbConnection from './config/db.js';

const app=express()
const port=process.env.PORT || 3000;

//! server start
app.listen(port ,()=>{
    console.log(`server is running on port : http://localhost:${port}`)
    dbConnection()
})