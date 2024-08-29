import mongoose , {Schema} from "mongoose";

const conversationSchema:Schema = new mongoose.Schema({
  convoFor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Paper',
  },
  studentParticipants : [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student',
    }],
  teacherParticipants : {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Teacher',
  },
  Messages :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Message',
    default: [],
  }],
}, {timestamps: true});


const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
