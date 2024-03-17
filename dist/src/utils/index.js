"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("./bcrypt");
const jwt_1 = require("./jwt");
const utils = {
    GenerateToken: jwt_1.generateToken,
    VerifyToken: jwt_1.verifyToken,
    DecodeToken: jwt_1.decodeToken,
    HashedPassword: bcrypt_1.hashPassword,
    ComparePassword: bcrypt_1.comparePassword,
    VerifyRefreshToken: jwt_1.verifyRefreshToken,
    GenerateRefreshToken: jwt_1.generateRefreshToken,
};
exports.default = utils;
