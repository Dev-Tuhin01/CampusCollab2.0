import {Request,Response} from "express";
import bcrypt from "bcryptjs"

import generateTokenAndSetCookie from "../utils/generateToken";
import { Teacher, Student } from "../models/user.model";
import generateRollNo from "../utils/generateRollNo";
import { error } from "console";

export const studLogin = async (req:Request,res:Response)=>{
  try {
    const {rollNo, password} = req.body;
    const student = await Student.findOne({rollNo});
    const isValidPassword = await bcrypt.compare(password, student?.password || "");

    if(!student || !isValidPassword){
      return res.status(400).json({error: "Invalid roll number or password"});
    }

    generateTokenAndSetCookie(student._id,false, res);

    res.status(200).json({
      _id : student._id,
      studentName: student.studentName,
      profilePic: student.profilePic,
    });

  } catch (error){
    console.error("Error in login control",(error as Error).message);
    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});
  }
}


export const teacherLogin = async (req:Request,res:Response)=>{
  try {
    const {teacherID, password} = req.body;
    const teacher= await Teacher.findOne({teacherID});
    const isValidPassword = await bcrypt.compare(password, teacher?.password || "");

    if(!teacher || !isValidPassword){
      return res.status(400).json({error: "Invalid teacher ID or password"});
    }

    generateTokenAndSetCookie(teacher._id,true, res);

    res.status(200).json({
      _id : teacher._id,
      studentName: teacher.teacherName,
      profilePic: teacher.profilePic,
    });

  } catch (error){
    console.error("Error in login control",(error as Error).message);
    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});
  }
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
      gender} = req.body;

    console.log(      studentName,
      email,
      password,
      subject,
      semester,
      admissionYear,
      gender)

    const rollNo = await generateRollNo(subject,admissionYear); // creating a roll no based on subject and admission year
    if(rollNo.length == 0) return res.status(400).json({error:"Could not generate roll no"})
    const student = await Student.findOne({rollNo});



    if(student){
      return res.status(400).json({error:"Looks Like You are Already admitted"});
    }

    //Password hashing
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
    
    const teacher = await Teacher.findOne({teacherID});

    if(teacher){
      return res.status(400).json({error:"You can only teach one class at a time professor"});
    }


    //Password hashing
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
      res.status(400).json({error:"Oops! Some data you sent is not right"});
    }


  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});   
   }
}


export const logout= (req:Request,res:Response)=>{
  try{
    res.cookie("jwt", "",{maxAge: 0});
    res.status(200).json({message:"Logged out successfully"});
  } catch(error) {
    console.error((error as Error).message);
    res.status(500).json({error:"Something is cooked in our machines! Don't worry"});   
  }
}
