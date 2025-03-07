import mongoose from 'mongoose'

const dbConnection=async ()=>{
    try {
        const db= await mongoose.connect(process.env.DB)
        if(db){
            console.log("database connect sucessful")
        }else{
            console.log("database not connect")
        }
    } catch (err) {
        throw new Error(err)
    }
}
export default dbConnection;