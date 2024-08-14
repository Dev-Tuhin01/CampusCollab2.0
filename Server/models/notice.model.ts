import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  noticeTitle: {
    type:String,
    required:true,
  },
  noticeCreatedby: {
    type:String,
    required:true,
    enum: ["admin","teacher"]
  },
  forSub:{
    type:String,
    required:true,
  },
  message:{
    type:String,
    required:true
  }
},{
    timestamps:true
  });

const Notice = mongoose.model("Notice",noticeSchema);

export default Notice;
