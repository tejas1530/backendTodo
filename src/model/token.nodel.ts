import { IRefreshToken } from './typings';
import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema<IRefreshToken>({
    userId: {
        type: String,
        required: true,
        ref:"User"
    },
    token: {
        type: String,
        required: true
    },


})

const Token = mongoose.model("Token", tokenSchema)
export default Token