import { getRefreshToken, login, logout, signUp } from "../Auth/auth.controller.js";
import { createCategory, getAllCategories } from "./category.controller.js";
import { createTodo, deleteTodo, getAllTodo, getTodo, getTodoByCategory, getTodoByUserId, updateTodo } from "./todos.controller.js";
import { getAllUsers } from "./user.controller.js";

const controller = {
    RegisterUser:signUp,
    LoginUser:login,
    LogoutUser:logout,
    GetRefreshToken:getRefreshToken,
    GetAllUsers:getAllUsers,
    CreateCategory:createCategory,
    GetAllCategories:getAllCategories,
    TODO:{
        GetAllTodo:getAllTodo,
    CreateTodo:createTodo,
    DeleteTodo:deleteTodo,
    UpdateTodo:updateTodo,
    GetTodo:getTodo,
    GetTodoByCategory:getTodoByCategory,
    GetTodoByUserId:getTodoByUserId,

    }
}

export default controller;