import db from "../model/index.js"

export  const getAllUsers=async(req,res)=>{
    try {
        const users=await db.UserModel.find()
        if (!users) {
            return res.status(400).json({
                message:"No users found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Users found",
            data:users})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

