import express from "express"
import {User} from "../models/user.js"
import { adduser, getallusers, getmyprofile ,logout,register} from "../controllers/user.js";
import { isAuthenticate } from "../middlewares/auth.js";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("The server is working Well");
});
 
router.get("/all",getallusers);

router.get("/me",isAuthenticate,getmyprofile);

router.post("/login",adduser);

router.post("/new",register)

router.get("/logout",isAuthenticate,logout);

export default router;