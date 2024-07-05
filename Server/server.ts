//Importing packages
import express,{Express,Request,Response } from "express";
import dotenv from "dotenv"

//importing routes
import authRoutes from "./routes/auth.routes.ts";

dotenv.config();


const app:Express = express();
const port: string | number = process.env.PORT || 3000;

//getting time for debugging purposes
const time = new Date()
const timestamp = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

app.get("/",(req:Request,res:Response)=>{
  res.send("Running Backend for CampusCollab")
});

app.use("/api/auth",authRoutes)


app.listen(port,()=>{
  console.log(`App is running on port:${port} @${timestamp}`);
});
