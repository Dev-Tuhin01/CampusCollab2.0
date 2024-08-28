import { useState } from "react";
import { iNotice } from "../interfaces/notice";
import toast from "react-hot-toast";

export const usePublish = () => {

  const [loading, setLoading] = useState(false);

  const publish = async (notice:iNotice)=>{
    
    console.log(notice);


    try{
      const res = await fetch("http://localhost:5000/api/notice/publish",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(notice)
      });

      const data = await res.json()
      console.log(data)

      if(data.error){
        throw new Error(data.error);
      }
      
    } catch(error) {
      toast.error((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }
     
  }

  const read = async (subject:string) => {
    try {
      const res = await fetch("http://localhost:5000/api/notice/read",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(subject)
      })
      const data = await res.json();
      return data;
    } catch (error) {
    toast.error((error as Error).message);
      console.error((error as Error).message);
  } finally {
    setLoading(false);
  }
}

  const readall = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notice/readall");
      const data = await res.json();
      return data;
    } catch (error) {
    toast.error((error as Error).message);
      console.error((error as Error).message);
  } finally {
    setLoading(false);
  }
}
     

  return {loading , publish , read,readall};
};

export default usePublish;
