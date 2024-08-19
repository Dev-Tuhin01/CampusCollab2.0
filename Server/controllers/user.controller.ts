import { Request, Response } from "express";
import { Teacher } from "../models/user.model";

export const getTeacher = async (req:Request,res:Response) => {
  const data = await Teacher.find({},{teacherName:1,teacherID:1});
  if(!data){
    return res.status(400).json({error:"Could not find any teachers"});
  }
  console.log(data.toLocaleString());
  res.status(200).json(data);
}

