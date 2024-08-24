import { Link } from "react-router-dom";



const Landing= () =>{
  return (
  <div className="flex items-center min-h-screen w-full flex-col ">
    <h1 className="text-primary md:text-8xl text-4xl"> Raiganj University</h1>
    <h3 className="text-secondary md:text-7xl text-3xl"> Department of CIS</h3>
    <h6 className="text-info">Admin panel, only for authorised personels</h6>
    <section className="divider divider-neutral"></section>
    <nav className="grow grid grid-cols-2 gap-4 size-full justify-items-center grid-rows-7 grid-cols-7 ">
        <Link to={"studentEnrollment"} className="w-11/12 row-start-2 row-span-2 col-span-3"><div className="h-full text-white flex items-center justify-center text-xl bg-secondary text-black rounded"> Student Enrollment </div></Link>
        <Link to={"teacherEnrollment"} className="w-11/12 row-start-2 col-start-5 row-span-2 col-span-3"><div className="h-full text-white flex items-center justify-center text-xl bg-error rounded"> Teacher Enrollment</div></Link>
        <Link to={"publishNotice"} className="w-11/12 row-start-5 row-span-2 col-span-3"><div className="h-full text-white flex items-center justify-center text-xl bg-neutral rounded"> Publish Notice</div></Link>
        <Link to={"addPaper"} className="w-11/12 row-start-5 col-start-5 row-span-2 col-span-3"><div className="h-full text-white flex items-center justify-center text-xl bg-accent text-black rounded"> Add Paper </div></Link>
    </nav>
  </div>
  )
}

export default Landing;
