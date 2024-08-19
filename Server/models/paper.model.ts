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
  subjects: [{type: String, required:true}],
  semester: {type:String, required:true},
  isMinor: {
    type:Boolean,
    required:true
  }
});


export const Paper = mongoose.model("Paper",paperSchema);
