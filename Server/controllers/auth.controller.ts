import {Request,Response} from "express";
import bcrypt from "bcryptjs"

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

    
    const student = await Student.findOne({studentName});

    if(student){
      return res.status(400).json({error:"Looks Like You are Already admitted"});
    }

    //Pasword hashing
    //generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //creating a default profilePic
    //https://avatar.iran.liara.run/username?username=[firstname+lastname]
    const studNameRef = studentName.split(' ').join('+');
    const profilePic = `https://avatar.iran.liara.run/username?username=${studNameRef}`;

    //saving the data to the database
    
    const newStudent = new Student({
      studentName,
      email,
      password:hashedPassword,
      subject,
      semester,
      admissionYear,
      rollNo,
      gender,
      profilePic
    });

    
    if (newStudent) {
      
      await newStudent.save();
      
      res.status(201).json({
        _id:newStudent._id,
        studentName:newStudent.studentName,
        rollNo:newStudent.rollNo,
        password:newStudent.password,
        profilePic:newStudent.profilePic
      })
    } else {
      res.status(400).json({error:"Oops! Some data you sent is not right"});
    }


     } catch (error) {
    console.error((error as Error).message);
    
    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});
  } 
}


export const teacherSignup = async (req:Request,res:Response)=>{
  try {
    const {
      teacherName,
      email,
      password,
      subject,
      joiningYear,
      teacherID,
      gender
    } = req.body;
    
    const teacher = await Teacher.findOne({teacherName});

    if(teacher){
      return res.status(400).json({error:"You can only teach one class at a time proffessor"});
    }


    //Pasword hashing
    //generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //generating profile pic
    const teacherNameRef= teacherName.split(' ').join('+');
    const profilePic = `https://avatar.iran.liara.run/username?username=${teacherNameRef}`;


    //Saving the data to db

    const newTeacher = new Teacher({
      teacherName,
      email,
      password:hashedPassword,
      subject,
      joiningYear,
      teacherID,
      gender,
      profilePic
    });

    if (newTeacher) {
      await newTeacher.save();

      res.status(201).json({
        _id:newTeacher._id,
        teacherID:newTeacher.teacherID,
        teacherName:newTeacher.teacherName,
        password:newTeacher.password,
        profilePic:newTeacher.profilePic
      })


    } else {
      
    }


  } catch (error) {
    console.error((error as Error).message);

    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});   
   }
}


export const logout= (req:Request,res:Response)=>{
  res.send("Logout Route");
 console.log("Logout Route accessed");
}
