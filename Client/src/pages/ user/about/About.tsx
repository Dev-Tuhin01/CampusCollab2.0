import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import useGetStudent from "../../../hooks/useGetStudent";
import { Logout } from "@mui/icons-material";
import useLogout from "../../../hooks/useLogout";
import useGetTeachers from "../../../hooks/useGetTeachers";

const AboutStudent = () =>{
  const [stud,getStud] = useState()
  const {authUser} = useAuthContext();
  const {loading,getStudent} = useGetStudent();
  console.log(authUser._id)
  useEffect(()=>{
    const getter = async () =>{
      getStud(await getStudent(authUser._id))
    }
    getter();
  },[])

  return (
  <div className="min-h-full w-full bg-background-primary overflow-auto flex flex-col grow items-center justify-center">
    <div className="bg-background-secondary border-Accent text-sm sm:text-xl w-fit rounded-md m-2 border-2 h-fit p-2 align-top flex-wrap flex">
      <div className="avatar">
        <div className="rounded-xl w-36 h-36">
          <img src={authUser.profilePic} className="w-fit" />
        </div>
      </div>
      <div className="divider sm:divider-horizontal" />
        <div className="my-2">
          <div className="Name text-secondary w-fit" >Name <span className="text-primary">{stud?.studentName}</span></div>
          <div className="Name text-secondary w-fit" >Department <span className="text-primary">Computer and Information Science</span></div>
          <div className="Name text-secondary w-fit" >Course <span className="text-primary">{stud?.subject}</span></div>
          <div className="Name text-secondary w-fit" >Course Type <span className="text-primary">{stud?.subject==="BCA"|| stud?.subject==="Bsc CS"?"UG":"PG"}</span></div>
          <div className="Name text-secondary w-fit" >Roll No. <span className="text-primary">{stud?.rollNo}</span></div>
          <div className="Name text-secondary w-fit" >Admission Year <span className="text-primary">{stud?.admissionYear}</span></div>
          <div className="divider text-warning" >Personal Info</div>
          <div className="Name text-secondary w-fit" >Gender <span className="text-primary">{stud?.gender}</span></div>
          <div className="Name text-secondary w-fit" >Email <span className="text-primary">{stud?.email}</span></div>
          <div className="divider text-warning" >Current Semester</div>
          <div className="Name text-secondary w-fit" >Current Semester <span className="text-primary">{stud?.semester}</span></div>
          <table className="table table-zebra max-w-md sm:max-w-full">
            <thead className="text-xl text-secondary">
              <tr>
                <th>Subject Code</th>
                <th>Subject Title</th>
                <th>Subject Teacher</th>
              </tr>
            </thead>
            <tbody className="text-lg text-primary">
              <tr><td>BCAH5</td><td>Concept of OOPs</td><td>SC</td></tr>
              <tr><td>BCAH6</td><td>React Programming</td><td>RK</td></tr>
              <tr><td>BCASDE5</td><td>Integrated Machine</td><td>SAK</td></tr>
              <tr><td>MTMGE3</td><td>Theory of Probability</td><td>AD</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

const AboutTeacher = () =>{
  const [teach,getTeach] = useState()
  const {authUser} = useAuthContext();
  const {loading,getOneTeacher} = useGetTeachers();
  console.log(authUser._id)
  useEffect(()=>{
    const getter = async () =>{
      getTeach(await getOneTeacher(authUser._id))
    }
    getter();
  },[])

  return (
  <div className="min-h-full w-full bg-background-primary overflow-auto flex flex-col grow items-center justify-center">
    <div className="bg-background-secondary border-Accent text-sm sm:text-xl w-fit rounded-md m-2 border-2 h-fit p-2 align-top flex-wrap flex">
      <div className="avatar">
        <div className="rounded-xl w-36 h-36">
          <img src={authUser.profilePic} className="w-fit" />
        </div>
      </div>
      <div className="divider sm:divider-horizontal" />
        <div className="my-2">
          <div className="Name text-secondary w-fit" >Name <span className="text-primary">{teach?.teacherName}</span></div>
          <div className="Name text-secondary w-fit" >Department <span className="text-primary">Computer and Information Science</span></div>
          <div className="Name text-secondary w-fit" >Teacher ID <span className="text-primary">{teach?.teacherID}</span></div>
          <div className="Name text-secondary w-fit" >Joining Year <span className="text-primary">{teach?.joiningYear}</span></div>
          <div className="divider text-warning" >Personal Info</div>
          <div className="Name text-secondary w-fit" >Gender <span className="text-primary">{teach?.gender}</span></div>
          <div className="Name text-secondary w-fit" >Email <span className="text-primary">{teach?.email}</span></div>
          <div className="divider text-warning" >Current Semester</div>
          <table className="table table-zebra max-w-md sm:max-w-full">
            <thead className="text-xl text-secondary">
              <tr>
                <th>Subject Code</th>
                <th>Subject Title</th>
                <th>Subject Teacher</th>
              </tr>
            </thead>
            <tbody className="text-lg text-primary">
              <tr><td>BCAH5</td><td>Concept of OOPs</td><td>SC</td></tr>
              <tr><td>BCAH6</td><td>React Programming</td><td>RK</td></tr>
              <tr><td>BCASDE5</td><td>Integrated Machine</td><td>SAK</td></tr>
              <tr><td>MTMGE3</td><td>Theory of Probability</td><td>AD</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}



const About = () =>{
  const {authUser} = useAuthContext()
  const {logout} = useLogout();

  return (
    <div className="min-h-full w-full flex flex-col">
      <button className="absolute right-5 top-5 rounded-full size-15" onClick={logout}><Logout /> </button>
      {
        authUser.user === "student" ? (
          <AboutStudent />
        ):(
          <AboutTeacher />
        )
      }
    </div>
  )
}

export default About;
