import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../context/authContext';

const Navbar = () => {

  const location = useLocation();
  const route = location.pathname.toString();
  const {authUser} = useAuthContext()

  return (
    <div className={route === "/app/chat" || route === "/app/notice" || route === "/app/about" || route==="/app"?"btm-nav bg-neutral":"hidden"}>
      <Link to={"chat"} className={route ==="/app/chat"?"active":""}>
      <button>
        <ChatIcon />
      </button>
      </Link>
      <Link to={"notice"} className={route ==="/app/notice"?"active":""}>
        <button>
          <NotificationsActiveIcon />
        </button>
      </Link>
      <Link to={"about"} className={route ==="/app/about"?"active":""}>
        <button>
          {authUser?<img src={authUser?.profilePic} className='w-10 border border-primary rounded-3xl' alt="" />:<AccountCircleIcon />}
        </button>
      </Link>
    </div>
  )
}

export default Navbar;

