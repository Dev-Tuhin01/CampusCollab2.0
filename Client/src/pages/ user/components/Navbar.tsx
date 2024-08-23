import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

  return (
    <div className="btm-nav bg-neutral">
  <button>
      <ChatIcon />
  </button>
  <button className="active">
    <NotificationsActiveIcon />
  </button>
  <button>
    <AccountCircleIcon />
  </button>
</div>
  )
}

export default Navbar;

