import express from "express"
import controller from "../controller/index.js"

const category = express.Router()

category.post("/create",controller.CreateCategory)
category.get("/all", controller.GetAllCategories)


export default category