import { FormEvent, useEffect, useState } from "react";
import useGetTeachers from "../../../hooks/useGetTeachers";
import { usePaper } from "../../../hooks/usePaper";
import { HourglassTopRounded } from "@mui/icons-material";
import { iPaper } from "../../../interfaces/paper";

const AddPaper = ()=>{

  const [data,setData] = useState<iPaper>({
    paperCode:"",
    paperName:"",
    teacherID:"",
    subjects:[""],
    semester:"",
    isMinor:false
  })

  const [teachers,setTeachers] = useState([]);

  const {getTeacher} = useGetTeachers();
  const {loading,publishPaper} = usePaper();
  
  useEffect(()=>{
    const getter = async () =>{
      setTeachers(await getTeacher());
    }
    getter();
  },[])

  const handleChange = (event) => {
    const { options } = event.target;
    if (data.isMinor) {
      // Handle multi-select mode
      const selectedValues = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setData({...data,subjects:selectedValues});
    } else {
      // Handle single-select mode
      setData({...data,subjects:[event.target.value]});
    }
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    publishPaper(data);
  }

  return (
    <div className="w-full h-full flex flex-col items-center md:m-5 my-2">
        <h3 className="md:text-6xl text-4xl text-primary">Add Paper for a subject</h3>
        <div className="divider m-2" />
        <form className="h-full md:w-8/12 w-11/12 border p-4 rounded bg-neutral" onSubmit={handleSubmit}>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-secondary">Enter paper code</span>
            </div>
            <input type="text" className="input input-bordered" placeholder="BCAH01" value={data.paperCode} onChange={(e)=>{setData({...data,paperCode:e.target.value})}} />
          </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter paper Name</span>
          </div>
          <input type="text" className="input input-bordered" placeholder="Introduction to Programming using C" value={data.paperName} onChange={(e)=>{setData({...data,paperName:e.target.value})}} />
        </label>

        <label className="form-control">
          <div className="label">
            <div className="label-text">Select Teacher</div>
          </div>

          <select className="select w-3/12" value={data.teacherID} onChange={(e)=>{setData({...data,teacherID:e.target.value})}}>
            <option selected disabled>Select a Teacher</option>
            {
              teachers.map((t)=>(
                <option value={t.teacherID} key={t.teacherID}>{t.teacherName}</option>
              ))
            }
          </select>
        </label>

        <div className="form-control w-4/12">
          <label className="label cursor-pointer">
            <span className="label-text">Is the paper is a minor paper?</span>
            <input type="checkbox" className="checkbox" checked={data.isMinor} onChange={(e)=>{setData({...data,isMinor:e.target.checked})}} />
          </label>
        </div>

        <label className="form-control">
          <div className="label">
            <div className="label-text">Select Subject</div>
          </div>
            <select className="select w-7/12" multiple={data.isMinor} value={data.isMinor ? data.subjects:data.subjects[0]} onChange={handleChange}>
              <option selected disabled>Select multiple subject(use shift to select multiple)</option>
              <option value="BCA">BCA</option>
              <option value="Bsc CS">Bsc CS</option>
              <option value="Msc CIS">Msc CIS</option>
              <option value="Msc CS">Msc CS</option>
            </select> 
        </label>

        <label className="form-control">
          <div className="label">
            <div className="label-text">Select Teacher</div>
          </div>
            <select className="select w-7/12" value={data.semester} onChange={(e)=>{setData({...data,semester:e.target.value})}}>
              <option selected disabled>Select semester</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
            </select> 
        </label>

        <button type="submit" className="btn btn-primary m-4">{loading?<HourglassTopRounded />:"Submit"}</button>
        <button type="reset" className="btn btn-ghost">Cancel</button>
      </form>
    </div>
  )
}

export default AddPaper;
