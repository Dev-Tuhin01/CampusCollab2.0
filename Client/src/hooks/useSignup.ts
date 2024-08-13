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

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async (stud:iStud)=>{
    const success = validate(stud);
    
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

export default useSignup;


const validate =(valStud:iStud):boolean=>{
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
