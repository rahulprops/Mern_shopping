
export const productCreate=async (req,res)=>{
    try {
        console.log("create product")
    } catch (err) {
        return res.status(500).json({
            message:`server error ${err.message}`
        })
    }
}