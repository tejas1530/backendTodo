"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.getRefreshToken = exports.login = exports.signUp = void 0;
const model_1 = __importDefault(require("../model"));
const utils_1 = __importDefault(require("../utils"));
const signUp = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        let existingUser;
        if (email) {
            existingUser = await model_1.default.UserModel.findOne({ email });
        }
        else {
            existingUser = await model_1.default.UserModel.findOne({ phone });
        }
        if (existingUser) {
            res.status(400).json({ message: "User already exist" });
        }
        const hashedPassword = await utils_1.default.HashedPassword(password);
        const user = await model_1.default.UserModel.create({
            name,
            email,
            phone,
            password: hashedPassword
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
};
exports.signUp = signUp;
const login = async (req, res) => {
    try {
        const { email, password, phone } = req.body;
        let user;
        if (email) {
            user = await model_1.default.UserModel.findOne({ email });
        }
        if (phone) {
            user = await model_1.default.UserModel.findOne({ phone });
        }
        if (!user) {
            res.status(400).json({ message: "User not found" });
        }
        // verify password
        if (user?.password) {
            const isMatch = await utils_1.default.ComparePassword(password, user.password);
            if (!isMatch) {
                res.status(40).json({ message: "Invalid password" });
            }
        }
        const accessToken = utils_1.default.GenerateToken({ userID: user?._id });
        const refreshToken = utils_1.default.GenerateRefreshToken({ userId: user?._id });
        await model_1.default.TokenModel.create({
            userId: user?._id,
            token: refreshToken
        });
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                data: user,
                accessToken: accessToken,
                refreshToken: refreshToken
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};
exports.login = login;
const getRefreshToken = async (req, res) => {
    try {
        const refToken = req.params.token;
        if (!refToken) {
            res.status(400).json({ message: "Refresh token is required" });
        }
        const decode = utils_1.default.VerifyRefreshToken(refToken);
        const existingToken = await model_1.default.TokenModel.findOne({ token: refToken });
        if (!existingToken) {
            res.status(400).json({ message: "Invalid token" });
        }
        const accessToken = utils_1.default.GenerateToken({ userID: decode?.userID });
        res.status(200).json({
            success: true,
            message: "Token refreshed",
            data: accessToken
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};
exports.getRefreshToken = getRefreshToken;
const logout = async (req, res) => {
    try {
        const token = req.params.token;
        if (!token) {
            res.status(400).json({ message: "Refresh token is required" });
        }
        await model_1.default.TokenModel.deleteOne({ token: token });
        res.status(200).json({
            success: true,
            message: "Logout successful"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};
exports.logout = logout;
