import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
  isTeacher:{
    type:Boolean,
    required:true
  },
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
  },
  conversationId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Conversation",
    required:true
  },
  message:{
    type:String,
    required:true
  }
},{ timestamps:true});

const message = mongoose.model("Message",messageSchema);

export default message;
