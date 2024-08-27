import { useState } from "react"
import toast from "react-hot-toast";
import {useAuthContext} from "../context/authContext"

const useLogout = () => {
  const [loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const logout =async () =>{
    try{
      const res = await fetch("/api/auth/logout",{
        method:"POST",
        headers:{"Content-Type":"application/json"}
      })

      const data = await res.json();

      if(data.error) {
        throw new Error(data.error);
      }      

      localStorage.removeItem("app-user");
      setAuthUser(null);
      
    } catch (e) {
      toast.error((e as Error).message);
      console.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  } 

  return {loading,logout};
}

export default useLogout;
