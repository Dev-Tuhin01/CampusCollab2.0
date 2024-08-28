import express from "express";
import { getOneTeacher, getStudent, getTeacher } from "../controllers/user.controller";

const router = express.Router();

router.get("/get/teacher",getTeacher);
router.post("/get/student",getStudent);

router.post("/get/oneteacher",getOneTeacher);

export default router;
