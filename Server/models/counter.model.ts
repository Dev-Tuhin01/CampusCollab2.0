import mongoose from "mongoose";

const studCounterSchema = new mongoose.Schema({
  subject:String,
  admisionYear:String,
  count:Number
});

export const studCounter = mongoose.model("StudCounter",studCounterSchema);

const teacherCounterSchema = new mongoose.Schema({
  subject:String,
  admisionYear:String,
  count:Number
});

export const teacherCounter = mongoose.model("TeacherCounter",teacherCounterSchema);
