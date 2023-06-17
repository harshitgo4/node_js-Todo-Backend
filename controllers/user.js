import  {User}  from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendcookies } from "../utils/feature.js";
import cookieParser from "cookie-parser";
import { isAuthenticate } from "../middlewares/auth.js";



const cookieParserMiddleware = cookieParser();
export const register= async(req,res)=>{
    const {name,email,password}=req.body;
    let user = await User.findOne({email})
    if(user)
    {
        return res.status(404).json({
            success:false,
            messsage:"User Already exist" 
        });
    };
    const hpass=await bcrypt.hash(password,10);
    user = 
            await User.create({
        name,email,password:hpass
    });
  sendcookies(user,res,201,"Registered Successfully");
}
export const getallusers=async(req,res)=>{
   
};


export const adduser=async(req,res)=>{
   const {email,password} =req.body
   const user =await User.findOne({email}).select("+password");
   if(!user)
   {
    return res.status(404).json({
        success:false,
        messsage:"Invalid email id or password" 
    });
   }
   const ismatch =await bcrypt.compare(password,user.password)
   if(!ismatch)
   {
    return res.status(404).json({
        success:false,
        messsage:"Invalid email id or password" 
    });
   }
   sendcookies(user,res,201,`Welcome back , ${user.name}`);
 };

export const getmyprofile= (req,res)=>{
    
    res.status(200).json({
        success:true,
        user:req.user
    });
}
export const logout=(req,res)=>{
    res.status(200).cookie("token","",{expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
    }).json({
        success:true,
        messsage:`you,ve logged out ${req.user.name}`
    });

};