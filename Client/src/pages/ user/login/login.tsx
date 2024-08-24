import { Link } from "react-router-dom"

const Login = ()=>{
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-11/12 min-h-72 flex flex-col rounded-3xl bg-neutral p-10">
        <div className="text-6xl text-primary text-center">Who are You?</div>
        <div className="divider" />
        <div className="w-full flex flex-wrap  justify-around">
        <Link to={"student"} className="w-5/12 glass min-h-36 bg-transparent"><div className="h-full rounded text-black  flex items-center justify-center text-xl bg-secondary glass text-black rounded">A Student</div></Link>
        <Link to={"teacher"} className="w-5/12 glass min-h-36"><div className="h-full glass rounded text-black flex items-center justify-center text-xl bg-error rounded">A Teacher</div></Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
