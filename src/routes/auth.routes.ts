import express from "express"
import controller from "../controller"

const auth = express.Router()

auth.post("/create",controller.RegisterUser)
auth.post("/login", controller.LoginUser)
auth.get("/logout/:token", controller.LogoutUser)
auth.get("/refresh/:token", controller.GetRefreshToken)

export default auth