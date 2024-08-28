import {  useState } from "react";
import usePublish from "../../../hooks/useNotice";
import useGetTeachers from "../../../hooks/useGetTeachers";
import { useAuthContext } from "../../../context/authContext";
import { ArrowBack} from "@mui/icons-material";
import { Link } from "react-router-dom";


const CreateNotice = () => {
  const [notice,setNotice] = useState({
    noticeTitle:"",
    noticeCreatedby:"",
    forSub:"",
    message:""
  });

  const {getOneTeacher} = useGetTeachers()
  const {authUser} = useAuthContext

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
                    <span className="label-text text-secondary">Enter title for notice</span>
                  </div>
                  <input type="text" className="input input-bordered" placeholder="Some interesting title" value={notice.noticeCreatedby} onChange={(e)=>{setNotice({...notice,noticeCreatedby:e.target.value})}} />
                </label>

        <label className="form-control">
          <div className="label">
            <div className="label-text">Select Subject</div>
          </div>
            <select className="select w-7/12" value={ notice.forSub} onChange={(e)=>{setNotice({...notice,forSub:e.target.value})}}>
              <option selected disabled>Select Subject</option>
              <option value="all">ALL</option>
              <option value="BCA">BCA</option>
              <option value="Bsc CS">Bsc CS</option>
              <option value="Msc CIS">Msc CIS</option>
              <option value="Msc CS">Msc CS</option>
            </select> 
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
    <Link to={"../"} className="absolute top-20 left-10"><ArrowBack /> </Link>
    </div>
  )
}

export default CreateNotice;
