import { useState } from "react"
import toast from "react-hot-toast";

const useGetTeachers = () =>{
  const [loading, setLoading] =useState(false);

  const getTeacher = async () => {
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/api/user/get/teacher");
      const data = await res.json();
      
      if(data.error){
        throw new Error(data.error);
      }
      console.debug(data);
      setLoading(false);

      return data;

    } catch (error){
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }

  }
  return {loading,getTeacher};
}

export default useGetTeachers;
