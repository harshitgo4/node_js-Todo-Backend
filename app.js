import express from "express"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errormiddleware } from "./middlewares/Error.js";
import cors from "cors"

config({
    path:"./Data/config.env",
});

  export const app=express();
  // middleware
  app.use(express.json());  
  app.use(cookieParser())
  app.use("/users",userRouter);
  app.use("/tasks",taskRouter);
  app.use(cors({
    origin:[process.env.FRONTED_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

  }))



  app.use(errormiddleware)
  export default app;