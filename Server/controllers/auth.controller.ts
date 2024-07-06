import {Request,Response} from "express"

import { Teacher, Student } from "../models/user.model";
import { error } from "console";

export const studLogin = (req:Request,res:Response)=>{
  res.send("Login Route");
 console.log("Login Route accessed");
}


export const teacherLogin = (req:Request,res:Response)=>{
  res.send("Login Route");
 console.log("Login Route accessed");
}


export const studSignup = async (req:Request,res:Response)=>{
  try {
    const {
      studentName,
      email,
      password,
      subject,
      semester,
      admissionYear,
      rollNo,
      gender} = req.body;

    console.log(studentName,email);
    
    const student = await Student.findOne({studentName});

    if(student){
      return res.status(400).json({error:"Looks Like You are Already admitted"});
    }

    //Pasword hashing

    //creating a default profilePic
    //https://avatar.iran.liara.run/username?username=[firstname+lastname]
    const studNameRef = studentName.split(' ').join('+');
    const profilePic = `https://avatar.iran.liara.run/username?username=${studNameRef}`;

    //saving the data to the database
    
    const newStudent = new Student({
      studentName,
      email,
      password,
      subject,
      semester,
      admissionYear,
      rollNo,
      gender,
      profilePic
    });

    await newStudent.save();

    res.status(201).json({
      _id:newStudent._id,
      studentName:newStudent.studentName,
      rollNo:newStudent.rollNo,
      profilePic:newStudent.profilePic
    })

  } catch (error) {
    console.error((error as Error).message);
    
    res.status(500).json({error:"Internal Server Error"});
  } 
}


export const teacherSignup = async (req:Request,res:Response)=>{
  const {} = req.body
}


export const logout= (req:Request,res:Response)=>{
  res.send("Logout Route");
 console.log("Logout Route accessed");
}
