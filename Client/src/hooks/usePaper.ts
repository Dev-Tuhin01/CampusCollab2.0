import { useState } from "react"
import { iPaper } from "../interfaces/paper";
import toast from "react-hot-toast";

export const usePaper = () =>{
  const [loading,setLoading] = useState(false);
  
  const publishPaper = async (paper:iPaper) =>{
    const success = validateBeforePublish(paper);
    console.log(paper)

    if(!success) return;

    try{
      const res = await fetch("http://localhost:5000/api/paper/add/",{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(paper)
      });

      const data = await res.json()
      console.log(data)

      if(data.error){
        throw new Error(data.error);
      }
    } catch (e) {
      toast.error((e as Error).message);
      console.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return {loading,publishPaper};
}

const validateBeforePublish = (paper:iPaper) =>{
  if(!paper.paperCode || !paper.paperName || !paper.teacherID || !paper.semester || paper.subjects.length <= 0 || paper.isMinor === null) {
    toast.error("Please fill all the fields correctly");
    return false;
  }
  if(!paper.isMinor && paper.subjects.length > 1){
    toast.error("Major papers can only have one subject")
    return false;
  }
  return true
}
