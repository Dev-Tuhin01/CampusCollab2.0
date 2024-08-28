import { Request, Response } from "express";
import { Student, Teacher } from "../models/user.model";
import { error } from "console";

export const getTeacher = async (req:Request,res:Response) => {
  const data = await Teacher.find({},{teacherName:1,teacherID:1});
  if(!data){
    return res.status(404).json({error:"Could not find any teachers"});
  }
  //console.log(data.toLocaleString());
  res.status(200).json(data);
}

export const getStudent = async (req:Request,res:Response)=>{
  const {id} = req.body;
  console.log(id,req.body)
  
  const data = await Student.findById({_id:id});
  
  if(!data) {
    return res.status(404).json({error:"Could not find the student"});
  }

 // console.table(data);
  res.status(200).json(data)
}

export const getOneTeacher = async (req:Request, res:Response) => {
  const {id} = req.body;
  console.log(id ,req.body);

  const data = await Teacher.findById({_id:id});

  if(!data) {
    return res.status(404).json({error:"Could not find the student"});
  }

 // console.table(data);
  res.status(200).json(data)

}
