import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";
import Notice from "./notice";
import { Create } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useNotice from "../../../hooks/useNotice"

const Notices = () =>{
  const {authUser} = useAuthContext();
  const [notices, setNotices] = useState([]);
  const {read , readall} = useNotice()

  useEffect(()=>{
    const getter = async ()=>{
      setNotices(await readall())
    }
    getter()
    console.log(notices , notices.length);
  },[])


  return (
    <div className="w-full h-full p-3">
      {notices.map((notice) => (
        <Notice key={notice.id} notice={notice} /> // Make sure to pass necessary props and use a unique key
      ))}
          {
        authUser.user === "teacher" && (
          <div className=" ">
            <Link to="createNotice" className="btn btn-secondary rounded-full absolute bottom-28 right-10 z-50 shadow-2xl"><Create /> </Link>
          </div>
        )
      }
    </div>
  )
}

export default Notices;
