import db from "../model/index.js";

export const createCategory=async(req,res)=>{
    try {
        const {categoryName,categoryDescription}=req.body
        if(!categoryName || !categoryDescription){
            return res.status(400).json({message:"categoryName , categoryDescription is required"})
        }
        const category=await db.CategoryModel.create({
            categoryName,
            categoryDescription
        });
        if(category){
            return res.status(201).json({
                success:true,
                message:"Category created successfully",
                data:category
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllCategories=async(req, res)=>{
    try {
        const categories=await db.CategoryModel.find()
        if (!categories) {
            return res.status(400).json({
                message:"No categories found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Categories found",
            data:categories})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}