import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryDescription: {
        type: String,
        required: true
    },
    categoryImage: {
        type: String,
    }


})

const todoSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    todoDescription: {
        type: String,
        required: true
    },

    todoCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    priority: { type: String, enum: ['low', 'medium', 'high'],default:"low" },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})
const Category = mongoose.model("Category", categorySchema)
const Todo = mongoose.model("Todo", todoSchema)
export { Category, Todo }

