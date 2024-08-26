import { useEffect, useState } from "react";
import Select from "react-select";
import useGetTeachers from "../../../hooks/useGetTeachers";

const AddPaper =  () => {
  const [data,setData] = useState({
    paperCode:"",
    paperName:"",
    teacherID:"",
    sub:[{subject:"",semester:""}],
    isMinor:false
  });
  
  const subjects = [
    {value:"BCA", label:"BCA"},
    {value:"Bsc CS", label:"Bsc CS"},
    {value:"Msc CIS", label:"Msc CIS"},
    {value:"Msc CS", label:"Msc CS"}
  ] 

  let tempSubs:string[];

  const singleSubChangeHandler = (val:string) =>{
    //tempSubs[0] = val;
    console.debug(val)
  }

  const multiSubChangeHandler = (val:{}[]) => {
    //tempSubs.push(val);
    console.log(val.toString)
    for (const i in val) {
      console.log(i)
  }
  }
  

  const [teachers,setTeachers] = useState([]);

  const {loading, getTeacher} = useGetTeachers();
  useEffect(()=>{
    const getter = async () => {
      const teachs = await getTeacher()
      setTeachers(teachs)
    }
    getter()
  },[])

  return (
    <div className="h-full w-full flex flex-col items-center md:m-5 my-2">
      <h2 className="md:text-6xl text-4xl text-primary">Add new Papers for a Subject</h2>
      <div className="divider" />
      <form className="h-full md:w-8/12 w-11/12 border p-4 rounded bg-neutral">
        <label className="form-control">
          <div className="label">
            <div className="label-text">Paper Code</div>
          </div>
          <input className="input input-bordered" placeholder="BCAH1" value={data.paperCode} onChange={(e)=>{setData({...data,paperCode:e.target.value})}} />
        </label>
        <label className="form-control">
          <div className="label">
            <div className="label-text">Paper Name</div>
          </div>
          <input className="input input-bordered" placeholder="Introduction to C" value={data.paperName} onChange={(e)=>{setData({...data,paperName:e.target.value})}} />
        </label>
         <label className="form-control">
          <div className="label">
            <div className="label-text">Select Teacher</div>
          </div>
          <select className="select w-3/12" value={data.teacherID} onChange={(e)=>{setData({...data,teacherID:e.target.value})}}>
            <option selected disabled>Select a Teacher</option>
            {
              teachers.map((t)=>(
                <option value={t.teacherID}>{t.teacherName}</option>
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
        <div className="flex flex-row w-1/2 justify-between">
          <label className="form-control">
            <div className="label">
              <div className="label-text">Subject</div>
            </div>
            {data.isMinor && <Select isMulti options={subjects} onChange={(option)=>{multiSubChangeHandler(option.values)}} />}
            {!data.isMinor && <Select options={subjects} onChange={(option)=>{singleSubChangeHandler(option?.value as string)}} />}
          </label>

          <label className="form-control">
            <div className="label">
              <div className="label-text">Semester</div>
            </div>
            <select className="select ">
                <option selected disabled>Select a Semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
            </select>
          </label>
        </div>
        <div className="divider" />
        <button type="submit" className="btn btn-primary" disabled={loading}>Submit</button>
        <button type="reset" className="btn btn-neutral m-2">Reset</button>
      </form>
    </div>
  )
}

export default AddPaper;
