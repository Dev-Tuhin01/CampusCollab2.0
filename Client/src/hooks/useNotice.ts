import { useState } from "react";
import { iNotice } from "../interfaces/notice";
import toast from "react-hot-toast";

export const usePublish = () => {

  const [loading, setLoading] = useState(false);

  const publish = async (notice:iNotice)=>{
    const success = validate(notice);
    
    console.log(notice);

    if(!success) return ;

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
    } finally {
      setLoading(false);
    }
     
  }

  return {loading , publish}
};


function validate(notice: iNotice) {
  return true;
}

export default usePublish;
