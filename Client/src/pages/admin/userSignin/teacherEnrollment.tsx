import { useState } from "react";
import {useTeachSignup} from "../../../hooks/useSignup"

const TeacherEnroll = ()=>{

  const [data,setData]  = useState({
    teacherName:"",
    email:"",
    password:"",
    subject:"",
    joiningYear:"",
    teacherID:"",
    gender:""
  });

  const {loading , signup} = useTeachSignup()

  const handleSubmit = async (e:SubmitEvent) => {
    e.preventDefault();
    console.log("submitting");
    await signup(data)
  }
  
  return(
  <div className="flex flex-col items-center m-5">
    <h1 className="md:text-7xl text-4xl text-primary">Teacher Enrolment Form</h1>
    <div className="divider" />
    <form className="h-full md:w-8/12 w-11/12 border p-4 rounded bg-neutral" onSubmit={handleSubmit}>
      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's Name</span>
          </div>
            <input type="text" placeholder="John Doe..." className="input input-bordered " value={data.teacherName} onChange={(e) =>{setData({...data,teacherName:e.target.value})}} />
      </label>

      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's Email</span>
          </div>
            <input type="email" placeholder="JohnDoe@xyz.com" className="input input-bordered " value={data.email} onChange={(e) => {setData({...data,email:e.target.value})}}/>
      </label>

      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's Password</span>
          </div>
            <input type="password" placeholder="fi15k80085!" className="input input-bordered " value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
      </label>

      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's Subject</span>
          </div>
          <select className="select select-bordered w-5/12" onChange={(e) => {setData({...data,subject:e.target.value})}}>
            <option disabled selected>Name of Subject</option>
            <option value="CIS">CIS</option>
          </select>
      </label>

      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's Joining Year</span>
          </div>
            <input type="text" placeholder="2002" className="input input-bordered " value={data.joiningYear} onChange={(e)=>{setData({...data,joiningYear:e.target.value})}}/>
      </label>

      <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Teacher's ID</span>
          </div>
            <input type="text" placeholder="CIS21SK01" className="input input-bordered " value={data.teacherID} onChange={(e)=>{setData({...data,teacherID:e.target.value})}}/>
      </label>
      <label className="form-control w-1/12">
          <div className="label">
            <span className="label-text text-secondary">Gender</span>
          </div>
          <label className="label cursor-pointer">
            <span className="label-text mx-2">Male</span>
            <input type="radio" name="gender" className="radio checked:bg-secondary" value={"male"} onChange={(e)=>{setData({...data,gender:e.target.value})}} />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text mx-2">Female</span>
            <input type="radio" name="gender" className="radio checked:bg-secondary" value={"female"} onChange={(e)=>{setData({...data,gender:e.target.value})}} />
          </label>
      </label>
      <div className="divider" />
      <button type="submit" className="btn btn-secondary" disabled={loading}>Submit</button>
      <button type="reset" className=" m-2 btn btn-neutral">Cancel</button>
    </form>
  </div>
  )
}

export default TeacherEnroll;
