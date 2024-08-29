import mongoose, {Schema } from "mongoose";
import { Student } from "./user.model";
import Conversation from "./convo.model";

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

paperSchema.post("save", async (doc)=>{
  try{
    const students = await Student.find({
      subject: { $in : doc.subjects },
      semester: doc.semester
    });

    const studentIds = students.map(student => student._id);

    const conversation = new Conversation({
      convoFor: doc._id,
      teacherParticipants: doc.teacher,
      studentParticipants: studentIds,
      Messages: []
    });

    await conversation.save();
    console.log(conversation,doc.paperName);
  } catch(e) {
    console.error((e as Error).message);
  }
})


export const Paper = mongoose.model("Paper",paperSchema);
