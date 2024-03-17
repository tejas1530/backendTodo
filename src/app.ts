import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes"

dotenv.config()

const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World");
  });

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// routes 

app.use("/api/v1/user",router.authRouter)


export default app