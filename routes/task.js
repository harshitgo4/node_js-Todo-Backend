import  express  from "express";
import { Getmytask, deletemytask, newTask, updatemytask } from "../controllers/task.js";
import { isAuthenticate } from "../middlewares/auth.js";
const router =express.Router();



router.post("/new",isAuthenticate,newTask)

router.get("/my",isAuthenticate,Getmytask)

router.route("/:id").put(isAuthenticate,updatemytask).delete(isAuthenticate,deletemytask)

export default router