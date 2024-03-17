"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.verifyRefreshToken = exports.verifyToken = exports.generateRefreshToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
};
exports.generateToken = generateToken;
const generateRefreshToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    });
    return token;
};
exports.generateRefreshToken = generateRefreshToken;
const verifyToken = (token) => {
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return payload;
    }
    catch (error) {
        throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
const verifyRefreshToken = (token) => {
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_SECRET);
    return payload;
};
exports.verifyRefreshToken = verifyRefreshToken;
const decodeToken = (token) => {
    const payload = jsonwebtoken_1.default.decode(token);
    return payload;
};
exports.decodeToken = decodeToken;
