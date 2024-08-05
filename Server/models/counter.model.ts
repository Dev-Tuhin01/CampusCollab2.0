import mongoose from "mongoose";

const studCounterSchema = new mongoose.Schema({
  subject:String,
  admissionYear:String,
  count:Number
});

export const StudCounter = mongoose.model("StudCounter",studCounterSchema);

const teacherCounterSchema = new mongoose.Schema({
  subject:String,
  admisionYear:String,
  count:Number
});

export const TeacherCounter = mongoose.model("TeacherCounter",teacherCounterSchema);
