import express,{Request,Response} from "express";

const router = express.Router();

router.get("/login",(req:Request,res:Response)=>{
  res.send("Login Route")
});


router.get("/logout",(req:Request,res:Response)=>{
  res.send("Logout Route")
});

export default router;
