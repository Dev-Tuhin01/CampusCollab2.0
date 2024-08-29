import express from "express";
import {readMessage,sendMessage} from "../controllers/message.model"

const router = express.Router();

router.get("/:id",readMessage);
router.post("/sendmessages",sendMessage);

export default router;
