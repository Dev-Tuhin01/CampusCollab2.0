import { useState } from "react";
import usePublish from "../../../hooks/useNotice";


const PublishNotice = () => {
  const [notice,setNotice] = useState({
    noticeTitle:"",
    noticeCreatedby:"admin",
    forSub:"all",
    message:""
  })

  const {loading,publish} = usePublish();

  const handleSubmit = (e:SubmitEvent) =>{
    e.preventDefault();
    console.log(notice)
    publish(notice);
  } 

  return (
    <div className="w-full h-full flex flex-col items-center md:m-5 my-2">
      <h2 className="md:text-6xl text-4xl text-primary">Publish Notice</h2>
      <div className="divider" />
      <form className="h-full md:w-8/12 w-11/12 border p-4 rounded bg-neutral" onSubmit={handleSubmit}>
        <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter title for notice</span>
          </div>
          <input type="text" className="input input-bordered" placeholder="Some interesting title" value={notice.noticeTitle} onChange={(e)=>{setNotice({...notice,noticeTitle:e.target.value})}} />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-secondary">Enter Message for notice</span>
          </div>
          <textarea className="textarea textarea-bordered h-32" placeholder="Some insightful message" value={notice.message} onChange={(e)=>{setNotice({...notice,message:e.target.value})}}></textarea>
        </label>
        <div className="divider" />
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="reset" className="btn btn-neutral m-2">Reset</button>
      </form>
    </div>
  )
}

export default PublishNotice;
