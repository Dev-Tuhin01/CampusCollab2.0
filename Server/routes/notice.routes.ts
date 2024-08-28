import express from "express";
import { noticePublish, noticeRead, noticeReadAll } from "../controllers/notice.controller";

const router = express.Router();

router.post("/publish",noticePublish);
router.get("/readall",noticeReadAll);
router.post("/read",noticeRead);

export default router;
