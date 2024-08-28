import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";
import Notice from "./notice";
import { Create } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useNotice from "../../../hooks/useNotice"
import useGetStudent from "../../../hooks/useGetStudent";

const Notices = () =>{
  const [stud,setStud] = useState()
  const {authUser} = useAuthContext();
  const [notices, setNotices] = useState([]);
  const {getStudent} = useGetStudent();
  const {read , readall} = useNotice()

  useEffect(()=>{
    const getter = async ()=>{
      console.log(authUser.user)
      if(authUser.user ==="teacher"){
        setNotices(await readall())
      }else {
        console.log(authUser._id)
        const r = await read(authUser._id);
        setNotices(r);
      }
    }
    getter()
  },[]);

  return (
    <div className="w-full h-full p-3">
      {notices.map((notice) => (
        <Notice key={notice?.id} notice={notice} /> // Make sure to pass necessary props and use a unique key
      ))}
          {
        authUser.user === "teacher" && (
            <Link to="createnotice" className="btn btn-secondary rounded-full absolute bottom-28 right-10 z-50 shadow-2xl"> <Create /> </Link>
        )
      }
    </div>
  )
}

export default Notices;
