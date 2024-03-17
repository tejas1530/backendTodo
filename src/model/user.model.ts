import { IUser } from './typings';
import mongoose from "mongoose";


const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})

const User = mongoose.model("User", userSchema)

export default User