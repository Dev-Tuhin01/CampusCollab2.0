//Importing packages
import express,{Express,Request,Response } from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";

//importing routes
import authRoutes from "./routes/auth.routes.ts";
import {connectToMongoDB} from "./db/connectToMongoDB.ts"

dotenv.config();


const app:Express = express();
const port: string | number = process.env.PORT || 5000;

//getting time for debugging purposes
const time = new Date()
const timestamp = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();


// Middlewares
app.use(express.json());            //to parse incoming requsts with JSON payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/auth",authRoutes);


app.get("/",(req:Request,res:Response)=>{
  //root route http://localhost:5000/

  res.send("Running Backend for CampusCollab")
});



app.listen(port,()=>{
  connectToMongoDB();
  console.log(`App is running on port:${port} @${timestamp}`);
});
