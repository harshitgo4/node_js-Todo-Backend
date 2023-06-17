import { app } from "./app.js";
import { database } from "./Data/database.js";
database();


console.log(process.env.PORT);
app.listen(4000,()=>{
    console.log(`server is working ${process.env.NODE_ENV}`);
})
 