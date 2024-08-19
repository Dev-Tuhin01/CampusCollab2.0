import express from "express";
import { getTeacher } from "../controllers/user.controller";

const router = express.Router();

router.get("/get/teacher",getTeacher);

export default router;
