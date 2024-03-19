import auth from "./auth.routes.js";
import category from "./category.routes.js";
import todo from "./todo.routes.js";
import user from "./users.routes.js";

const router ={
    authRouter:auth,
    userRouter:user,
    categoryRouter:category,
    TodoRouter:todo
}

export default router;