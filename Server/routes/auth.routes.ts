import express from "express";


import {  logout,  studLogin, studSignup, teacherLogin, teacherSignup } from "../controllers/auth.controller.ts";

const router = express.Router();

router.post("/login/student",studLogin);
router.post("/login/teacher",teacherLogin);

router.post("/signup/teacher",teacherSignup);
router.post("/signup/student",studSignup);

router.post("/logout",logout);

export default router;
