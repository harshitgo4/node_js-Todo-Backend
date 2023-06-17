import jwt from "jsonwebtoken";
export const sendcookies =(user,res,Statuscode=200,messsage)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.status(Statuscode).cookie("token",token,{
        maxAge:15*1000*60,
        httpOnly:true,
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
    }
    ).json({
        success:true,
        messsage,
    })
}