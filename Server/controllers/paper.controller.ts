import { Request, Response } from "express";
import { Paper } from "../models/paper.model";
import { Teacher } from "../models/user.model";

export const addPaper = async (req:Request, res:Response) => {
  try {

    const {
      paperCode,
      paperName,
      teacherID,
      subjects,
      semester,
      isMinor
    } = req.body;

    console.log(paperCode, teacherID, subjects,isMinor);

    const teacher = await Teacher.findOne({teacherID});

    if(!teacher){
      console.error("No teacher found");
      return res.send(404).json({error:"No teacher found with this id"});
    }
    
    const id = teacher._id;
    console.debug(id);

    const newPaper = new Paper({
      paperCode,
      paperName,
      teacher:id,
      subjects,
      semester,
      isMinor
    });

    if(newPaper){
      await newPaper.save();
      res.status(200).json({
        _id: newPaper._id,
        paperCode: newPaper.paperCode
      }) 
    } else {
      res.status(400).json({error:"Could not create paper"});
    }

  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({error:"Something is cooked in out servers"});
  }
}
