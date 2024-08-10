import { Link } from "react-router-dom";



const Landing= () =>{
  return (
  <div className="flex items-center h-full w-full flex-col ">
    <h1 className="text-primary md:text-8xl text-4xl"> Raiganj University</h1>
    <h3 className="text-secondary md:text-7xl text-3xl"> Department of CIS</h3>
    <h6 className="text-info">Admin panel, only for authorised personels</h6>
    <section className="divider divider-neutral"></section>
    <nav className="grid grid-cols-2 gap-4 h-fit w-full justify-items-center grid-rows-2">
        <div className="w-11/12 mx-96 h-24 text-white flex items-center justify-center text-xl bg-secondary text-black rounded"> <Link to={"studentEnrollment"}>Student Enrollment</Link> </div>
        <div className="w-11/12 mx-96 h-24 text-white flex items-center justify-center text-xl bg-error rounded"><Link to={"teacherEnrollment"}> Teacher Enrollment</Link></div>
        <div className="w-11/12 mx-96 h-24 text-white flex items-center justify-center text-xl bg-neutral rounded"> Publish Notice</div>
        <div className="w-11/12 mx-96 h-24 text-white flex items-center justify-center text-xl bg-accent text-black rounded"> Add Paper </div>
    </nav>
  </div>
  )
}

export default Landing;
