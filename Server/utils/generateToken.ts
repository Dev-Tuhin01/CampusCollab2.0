import jwt from 'jsonwebtoken';
import { Response} from 'express';

const generateTokenAndSetCookie = (userID:any,isTeacher:boolean, res:Response) => {
  const token = jwt.sign({userID,isTeacher},`${process.env.JWT_SECRET}` ,{
    expiresIn:"15d"
  });

  res.cookie("jwt",token,{
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in ms
    httpOnly: true, //preventing xss attacks
    sameSite: "strict",
    secure: `${process.env.NODE_ENV}` !== "development"
  })
};

export default generateTokenAndSetCookie;

