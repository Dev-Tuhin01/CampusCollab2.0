import express from "express";
import {getConversation , getConversationForTeachers } from "../controllers/conversation.model.ts"

const router = express.Router();

router.post("/getConversation",getConversation);
router.post("/getConversation/teachers",getConversationForTeachers);

export default router;
