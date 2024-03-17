import { comparePassword, hashPassword } from "./bcrypt";
import { decodeToken, generateRefreshToken, generateToken, verifyRefreshToken, verifyToken } from "./jwt";

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