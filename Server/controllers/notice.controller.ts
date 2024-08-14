import Notice from "../models/notice.model";
import { Response, Request } from "express";

export const noticePublish = async (req:Request,res:Response) => {
  
    try {
      const { noticeTitle,
        noticeCreatedby,
        forSub,
        message
      } = req.body;
    
    console.debug(noticeTitle , noticeCreatedby, forSub, message)

      if(noticeCreatedby !== "admin" || noticeCreatedby !== "teacher"){
      return res.status(400).json({error:"Who are you publishing notice?"})
    }

      const newNotice = new Notice({
        noticeTitle , noticeCreatedby, forSub, message
      });
      
      if(newNotice) {
        await newNotice.save();
        
        res.status(201).json({
          _id:newNotice._id,
          noticeTitle:newNotice.noticeTitle,
          message:newNotice.message,
          time:newNotice.createdAt
      })
    }
      

  } catch (error){
    console.error((error as Error).message);
    res.status(500).json({error:"Something is cooked in our machines"});
  }
}

