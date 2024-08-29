import { Response, Request } from "express"
import Conversation from "../models/convo.model";
import message from "../models/message.model";

export const getConversation =async (req:Request,res:Response) =>{
  const {_id} = req.body;
  console.log(_id)

  const conversations = await Conversation.find({
    studentParticipants: {$in : _id}
  }).populate('convoFor studentParticipants teacherParticipants Messages');
  
  res.status(200).json(conversations);
}
export const getConversationForTeachers =async (req:Request,res:Response) =>{
  const {_id} = req.body;
  console.log("teacher",_id)

  const conversations =await Conversation.find({
    teacherParticipants: _id
  }).populate('convoFor studentParticipants teacherParticipants Messages');
  
  res.status(200).json(conversations);
}
