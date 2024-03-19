import { comparePassword, hashPassword } from "./bcrypt.js";
import { decodeToken, generateRefreshToken, generateToken, verifyRefreshToken, verifyToken } from "./jwt.js";

const utils = {
    GenerateToken:generateToken,
    VerifyToken:verifyToken,
    DecodeToken:decodeToken,
    HashedPassword:hashPassword,
    ComparePassword:comparePassword,
    VerifyRefreshToken:verifyRefreshToken,
    GenerateRefreshToken:generateRefreshToken,

}

export default utils;