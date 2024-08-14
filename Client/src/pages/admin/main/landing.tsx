import { Link } from "react-router-dom";



const Landing= () =>{
  return (
  <div className="flex items-center h-full w-full flex-col ">
    <h1 className="text-primary md:text-8xl text-4xl"> Raiganj University</h1>
    <h3 className="text-secondary md:text-7xl text-3xl"> Department of CIS</h3>
    <h6 className="text-info">Admin panel, only for authorised personels</h6>
    <section className="divider divider-neutral"></section>
    <nav className="grid grid-cols-2 gap-4 h-full w-full justify-items-center grid-rows-2">
        <Link to={"studentEnrollment"} className="w-11/12"><div className="h-24 text-white flex items-center justify-center text-xl bg-secondary text-black rounded"> Student Enrollment </div></Link>
        <Link to={"teacherEnrollment"} className="w-11/12"><div className="h-24 text-white flex items-center justify-center text-xl bg-error rounded"> Teacher Enrollment</div></Link>
        <Link to={"publishNotice"} className="w-11/12"><div className="h-24 text-white flex items-center justify-center text-xl bg-neutral rounded"> Publish Notice</div></Link>
        <Link to={"addPaper"} className="w-11/12"><div className="h-24 text-white flex items-center justify-center text-xl bg-accent text-black rounded"> Add Paper </div></Link>
    </nav>
  </div>
  )
}

export default Landing;
