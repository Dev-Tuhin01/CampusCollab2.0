import { Response, Request } from "express"
import Message from "../models/message.model";
import Conversation from "../models/convo.model";


export const readMessage = async (req:Request, res:Response) =>{
   try {
    const messages = await Message.find({ conversationId: req.params.id }).populate('senderId');
    console.log(messages);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
}

export const sendMessage = async (req:Request, res:Response) => {
  const { isTeacher, senderId, conversationId, message } = req.body;

  try {
    const senderModel = isTeacher ? 'Teacher' : 'Student';

    const newMessage = new Message({
      isTeacher,
      senderId,
      senderModel,
      conversationId,
      message
    });

    const savedMessage = await newMessage.save();

    // Update the conversation with the new message
    await Conversation.findByIdAndUpdate(conversationId, {
      $push: { Messages: savedMessage._id }
    });

    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
}
