"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./src/DB/database"));
(0, database_1.default)();
// Example usage of Dotenv
const PORT = process.env.PORT || 3000;
// Start the server
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
