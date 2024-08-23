import Topabar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const App = () =>{
  return (
    <div className="min-h-screen w-full">
        <Topabar />
        <Outlet />
        <Navbar />
    </div>

  )
}

export default App;
