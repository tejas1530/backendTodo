"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config/config"));
const saltRounds = 10;
const pepper = config_1.default.PEPPER;
const hashPassword = async (password) => {
    try {
        const hashPassword = await bcrypt_1.default.hash(password + pepper, saltRounds);
        return hashPassword;
    }
    catch (error) {
        throw new Error('Error hashing password');
    }
};
exports.hashPassword = hashPassword;
const comparePassword = async (password, hash) => {
    try {
        return await bcrypt_1.default.compare(password + pepper, hash);
    }
    catch (error) {
        throw new Error('Error comparing password');
    }
};
exports.comparePassword = comparePassword;
