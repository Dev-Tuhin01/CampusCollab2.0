import mongoose, {Schema } from "mongoose";

const paperSchema:Schema = new mongoose.Schema({
  paperCode: {
    type:String,
    required:true,
    unique:true
  },
  paperName : {
    type:String,
    required:true
  },
  teacher:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Teacher",
    required:true
  },
  sub:[{
    subject: {type: String, required:true},
    Semester: {type:String, required:true}
  }],
  isMinor: {
    type:Boolean,
    required:true
  }
});


export const paper = mongoose.model("Paper",paperSchema);
