import { strict } from "assert";
import { useState } from "react";
import toast from "react-hot-toast";

interface iStud  {
  studentName:string;
  email:string;
  password:string;
  subject:string;
  semester:string;
  admissionYear:string;
  gender:string;
}

interface iTeach {
  teacherName:string;
  email:string;
  password:string;
  subject:string;
  joiningYear:string;
  gender:string;
}

export const useStudSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (stud:iStud)=>{
    const success = studValidate(stud);
    
    console.log(stud);

    if(!success) return ;

    try{
      const res = await fetch("http://localhost:5000/api/auth/signup/student",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(stud)
      });

      const data = await res.json()
      console.log(data)

      if(data.error){
        throw new Error(data.error);
      }
      
    } catch(error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
     
  }

  return {loading , signup}
};



const studValidate =(valStud:iStud):boolean=>{
  if(!valStud.studentName || !valStud.email || !valStud.password || !valStud.subject || !valStud.semester || !valStud.admissionYear || !valStud.gender){
    toast.error("Please fill all the fields!");
    return false;
  }

  if(valStud.password.length < 8){
    toast.error("password Should be longer than 8 characters")
    return false;
  }
  return true;
};



export const useTeachSignup = () =>{
  const [loading, setLoading] = useState(false);

  const signup = async (teacher:iTeach) =>{
    console.log(teacher)
    const success = teachValidate(teacher);

    if (!success) return ;
    
    try{
      console.log("sending")
      const res = await fetch("http://localhost:5000/api/auth/signup/teacher", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(teacher)
      })

      const data = await res.json();
      console.log(data);

      if(data.error){
        throw new Error(data.error);
      }
      
    } catch(error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }
  
  return {loading,signup};
}


const teachValidate = (valTeach:iTeach):boolean => {
  if (!valTeach.teacherName || !valTeach.email || !valTeach.password || !valTeach.subject || !valTeach.joiningYear || !valTeach.gender) {
    toast.error("please fill all the fields");
    console.log("error")
    return false;
  }
  
  if(valTeach.password.length < 8){
    toast.error("password should be longer than 8 charectars");
    return false;
  }

  return true;

}
