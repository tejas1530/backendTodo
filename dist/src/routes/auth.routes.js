"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller"));
const auth = express_1.default.Router();
auth.post("/create", controller_1.default.RegisterUser);
auth.post("/login", controller_1.default.LoginUser);
auth.get("/logout/:token", controller_1.default.LogoutUser);
auth.get("/refresh/:token", controller_1.default.GetRefreshToken);
exports.default = auth;
