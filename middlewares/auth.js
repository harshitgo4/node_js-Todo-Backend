import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticate =  async (req,res,next)=>{
    const id="my";

    const {token}=req.cookies;
    if(!token)
    {
        return res.status(404).json({
            success:false,
            messsage:"Login First Bruhh" 
        }); 
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    
    next();
};