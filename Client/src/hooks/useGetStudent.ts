import { useState } from "react";
import toast from "react-hot-toast";

const useGetStudent= () =>{
  const [loading, setLoading] =useState(false);

  const getStudent = async (id:string) => {
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/user/get/student",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id})
      });
      const data = await res.json();
      
      if(data.error){
        throw new Error(data.error);
      }
      console.table(data);
      setLoading(false);

      return data;

    } catch (error){
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }

  }
  return {loading,getStudent};
}

export default useGetStudent;
