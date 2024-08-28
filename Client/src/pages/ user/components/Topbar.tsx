import { Link } from "react-router-dom"

const Topabar = () => {
  return (
    <div className="navbar bg-neutral">
      <Link className="btn btn-ghost text-xl" to="/">CampusCollab</Link>
    </div>
  )
}

export default Topabar
