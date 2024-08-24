import { useState } from "react"
import toast from "react-hot-toast";

export const useStudLogin = () =>{
  const [loading,setLoading] = useState(false);
  
  const login = async (studentName:string , password:string) =>{
    const success = studValidate(studentName,password)
    if(!success){
      return ;
    }
  
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/auth/login/student",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({studentName,password})
      })
      const data = await res.json();
      if(data.error){
        throw new Error(data.error);
      }

      //storing data in local storage and then creating a context shared across the app
      data.user = "student";
      localStorage.setItem("app-user",JSON.stringify(data));
    } catch(error) {
      toast.error((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }

  }
   return {loading,login}; 
}
function studValidate(studentName: string, password: string) {
  if(!studentName || !password) {
    toast.error("Missing studentname or password");
    return false;
  }

  if(password.length < 8){
    toast.error("Password is too small");
    return false;
  }
  return true
}

