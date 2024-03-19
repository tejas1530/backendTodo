import { getRefreshToken, login, logout, signUp } from "../Auth/auth.controller.js";

const controller = {
    RegisterUser:signUp,
    LoginUser:login,
    LogoutUser:logout,
    GetRefreshToken:getRefreshToken

}

export default controller;