"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI || "", {
            dbName: process.env.DB_NAME,
        });
    }
    catch (error) {
        console.error('Database connection error:', error);
    }
};
mongoose_1.default.connection.on('connecting', () => {
    console.log('Connecting to MongoDB...');
});
mongoose_1.default.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose_1.default.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
mongoose_1.default.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
exports.default = connectDB;
