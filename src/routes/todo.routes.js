import express from "express";
import controller from "../controller/index.js";
import e from "express";

const todo = express.Router();

todo.get("/all",controller.TODO.GetAllTodo)
todo.post("/create", controller.TODO.CreateTodo)
todo.put("/update/:id", controller.TODO.UpdateTodo)
todo.delete("/delete/:id", controller.TODO.DeleteTodo)
todo.get("/uniq/:id", controller.TODO.GetTodo)
todo.post("/uniqCategory",controller.TODO.GetTodoByCategory)
todo.post("/uniqUser", controller.TODO.GetTodoByUserId)


export default todo;