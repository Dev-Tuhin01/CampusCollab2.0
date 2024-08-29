import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
  isTeacher:{
    type:Boolean,
    required:true
  },
  senderId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    refPath:'senderModel'
  },
  senderModel:{
    type:String,
    required:true,
    enum:["Teacher","Student"]
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

const Message = mongoose.model("Message",messageSchema);

export default Message;
