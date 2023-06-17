import mongoose from "mongoose";

const schema=mongoose.Schema({
    name: String,
    email:{
    type: String,
    unique:true,
    require:true
    },
    password:
    {
     type: String,
      select:false,
      require:true
    },
    createdAt :{
      type:Date,
      default:Date.now,
      require:true
    }
  });

   export const User =mongoose.model("users",schema);
