"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_nodel_1 = __importDefault(require("./token.nodel"));
const user_model_1 = __importDefault(require("./user.model"));
const db = {
    UserModel: user_model_1.default,
    TokenModel: token_nodel_1.default
};
exports.default = db;
