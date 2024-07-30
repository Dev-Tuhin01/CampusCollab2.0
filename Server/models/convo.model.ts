import mongoose , {Schema} from "mongoose";

const conversationSchema:Schema = new mongoose.Schema({
  studentParticipants : [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student',
    }],
  teahcerParticipants : [{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Teacher',
  }],
  studentMessages :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'StudMessage',
    default: [],
  }],
  teacherMessages :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'teacherMessage',
    default: [],
  }]

}, {timestamps: true});


const Convo = mongoose.model("Conversation", conversationSchema);

export default Convo;
