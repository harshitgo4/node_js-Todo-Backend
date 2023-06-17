import errorhandle from "../middlewares/Error.js";
import { Task } from "../models/task.js";

export const newTask =async (req,res)=>{
    const {title,description} =req.body;
    await Task.create({
        title,
        description,
        user:req.user
    })
    res.status(201).json({
        success:true,
        message:"task added Successfully",
    });
};
export const Getmytask = async (req,res,next)=>{
const user_id=req.user._id;
const tasks = await Task.find({user:user_id});  
    res.status(201).json({
    success:"true",
    tasks    
}); 
};

export const updatemytask = async (req,res,next)=>{
    const {id}=req.params;
    const task= await Task.findById(id);
    if(!task)
        {
           return next(new errorhandle("Internal servr error",404));
        }
    task.isCompleted=!task.isCompleted;
    await task.save();
        res.status(201).json({
        success:"true",
        message:"task updated"
    }); 
    };


    export const deletemytask = async (req,res,next)=>{
        const {id}=req.params;
        const task= await Task.findById(id);
        if(!task) return next(new errorhandle());
        task.isCompleted=!task.isCompleted;
        await task.deleteOne();


            res.status(201).json({
            success:"true",
            message:"Task deleted "
        }); 
        };