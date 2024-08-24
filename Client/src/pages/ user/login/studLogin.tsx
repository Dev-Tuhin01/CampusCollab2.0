import { useState } from "react";

const StudLogin = () => {
  const [data,setData] = useState({
    "studentName":"",
    "password":""
  })

  const handleSubmit = (e:SubmitEvent) => {
    e.preventDefault()
    console.table(data)
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center m-5">
      <form className="h-full md:w-8/12 w-11/12 border p-4 rounded-2xl bg-neutral">
        <div className="flex flex-col items-center">
          <h1 className="md:text-6xl text-4xl text-primary">Login Form for Students</h1>
          <h1 className="md:text-2xl text-xl text-secondary">If your record is not found please contact admins or department</h1>
        </div>
        <div className="divider" />
        <label className="form-control m-y-3">
          <div className="label">
            <span className="label-text"> Enter your Roll no</span>
          </div>
          <input type="text" className="input bordered" value={data.studentName} placeholder="BCA2100001" onChange={(e)=>{setData({...data,studentName:e.target.value})}} />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text"> Enter your Password</span>
          </div>
          <input type="password" className="input bordered" value={data.password} placeholder="58008apn6u9" onChange={(e)=>{setData({...data,password:e.target.value})}} />
        </label>

        <div className="divider" />
        <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
        <button type="reset" className="m-2 btn btn-neutral">Cancel</button>
      </form>
    </div>
  )
}

export default StudLogin;
