import express from "express";
import { noticePublish } from "../controllers/notice.controller";

const router = express.Router();

router.post("/publish",noticePublish);
router.post("/read",);

export default router;
