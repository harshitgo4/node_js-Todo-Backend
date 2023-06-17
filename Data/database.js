import mongoose from "mongoose"
 export const database =()=>
 {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
  }).then( () => {
     console.log("database connected")
  })
}