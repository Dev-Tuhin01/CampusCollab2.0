import express from "express";
import { addPaper } from "../controllers/paper.controller";

const router = express.Router();

router.post("/add",addPaper);
router.post("/read",);

export default router;
