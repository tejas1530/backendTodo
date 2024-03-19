import { Category, Todo } from "./todo.model.js";
import Token from "./token.model.js";
import User from "./user.model.js";

const db ={
    UserModel:User,
    TokenModel:Token,
    TodoModel:Todo,
    CategoryModel:Category
}

export default db;