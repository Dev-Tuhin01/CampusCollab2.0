import express from "express";
import { getStudent, getTeacher } from "../controllers/user.controller";

const router = express.Router();

router.get("/get/teacher",getTeacher);
router.post("/get/student",getStudent);

export default router;
