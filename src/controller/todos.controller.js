import db from "../model/index.js"

export const getAllTodo =async(req,res)=>{
    try {
        const todo = await db.TodoModel.find()
        if(!todo) return res.status(400).json({msg: "Todo not found"})
        res.status(200).json({
            success: true,
            message: "Get all todo",
            data:todo

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })        
    }
}


export const createTodo = async(req, res)=>{
    try {
        const todo = await db.TodoModel.create(req.body)
        res.status(200).json({
            success:true,
            message:"Todo created",
            data:todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteTodo = async(req, res)=>{
    try {
        const todo = await db.TodoModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Todo deleted",
            data:todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const updateTodo = async(req, res)=>{
    try {
        const todo = await db.TodoModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            success:true,
            message:"Todo updated",
            data:todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getTodo = async(req, res)=>{
    try {
        const todo = await db.TodoModel.findById(req.params.id)
        res.status(200).json({
            success:true,
            message:"Todo found",
            data:todo
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getTodoByCategory = async (req, res) => {
    try {
        const { todoCategoryId ,userId } = req.body;

        const category = await db.CategoryModel.findById(todoCategoryId);
        if (!category) return res.status(400).json({ msg: "Category not found" });

        // Populate todo for the found category
        const todo = await db.TodoModel.find({userId, todoCategoryId }).populate("todoCategoryId").populate("userId","-password");

        res.status(200).json({
            success: true,
            message: "Todo found",
            data: todo
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getTodoByUserId = async (req, res) => {
    try {
        const { userId } = req.body;

        const todo = await db.TodoModel.find({ userId }).populate("userId", "-password");

        res.status(200).json({
            success: true,
            message: "Todo found",
            data: todo
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}