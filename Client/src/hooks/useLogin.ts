import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

export const useStudLogin = () =>{
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  
  const login = async (rollNo:string , password:string) =>{
    console.debug(rollNo,password);
    const success = studValidate(rollNo,password);
    if(!success){
      return ;
    }
  
  
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/login/student",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({  rollNo,password})
      })
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }


      //storing data in local storage and then creating a context shared across the app
      data.user = "student";
      console.log(data)
      localStorage.setItem("app-user",JSON.stringify(data));
      setAuthUser(data);
      
      
    } catch(error) {
      toast.error((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }

  }
   return {loading,login}; 
}
function studValidate(rollNo: string, password: string) {
  if(!rollNo || !password) {
    toast.error("Missing roll no or password");
    return false;
  }

  if(password.length < 8){
    toast.error("Password is too small");
    return false;
  }
  return true
}
export const useTeachLogin = () =>{
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  
  const login = async (teacherId:string , password:string) =>{
    const success = teachValidate(teacherId,password)
    if(!success){
      return ;
    }
  
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/login/student",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({teacherId,password})
      })
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }

      //storing data in local storage and then creating a context shared across the app
      data.user = "teacher";
      localStorage.setItem("app-user",JSON.stringify(data));
      setAuthUser(data);

    } catch(error) {
      toast.error((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }

  }
   return {loading,login}; 
}
function teachValidate(teacherID: string, password: string) {
  if(!teacherID || !password) {
    toast.error("Missing id or password");
    return false;
  }

  if(password.length < 8){
    toast.error("Password is too small");
    return false;
  }
  return true
}

