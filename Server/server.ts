//Importing packages
import express,{Express,Request,Response } from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

//importing routes
import authRoutes from "./routes/auth.routes.ts";
import noticeRoutes from "./routes/notice.routes.ts"
import paperRoutes from "./routes/paper.routes.ts"
import userRoutes from "./routes/user.routes.ts"
import messageRoutes from "./routes/message.routes.ts";
import conversationRoutes from "./routes/conversation.routes.ts";
import {connectToMongoDB} from "./db/connectToMongoDB.ts"

dotenv.config();


const app:Express = express();
const port: string | number = process.env.PORT || 5000;

dotenv.config();
const server = createServer(app);
const io = new Server(server,{cors:{
  origin:"*",
  methods: ["GET","POST"]
}});


//getting time for debugging purposes
const time = new Date()
const timestamp = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();


// Middlewares
app.use(express.json());            //to parse incoming requests with JSON payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({

}))


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/notice", noticeRoutes);
app.use("/api/paper", paperRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/conversation", conversationRoutes);


io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("sendMessage", (message) => {
    io.emit("newMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("/",(req:Request,res:Response)=>{
  //root route http://localhost:5000/

  res.send("Running Backend for CampusCollab")
});



server.listen(port,()=>{
  connectToMongoDB();
  console.log(`App is running on port:${port} started running on ${timestamp}`);
});
