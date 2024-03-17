"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../Auth/auth.controller");
const controller = {
    RegisterUser: auth_controller_1.signUp,
    LoginUser: auth_controller_1.login,
    LogoutUser: auth_controller_1.logout,
    GetRefreshToken: auth_controller_1.getRefreshToken
};
exports.default = controller;
