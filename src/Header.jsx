import React from 'react'
import SearchIcon from  '@material-ui/icons/Search'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import NotificationIcon from '@material-ui/icons/Notifications'
import HomeIcon from '@material-ui/icons/Home'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import {useSelector,useDispatch} from 'react-redux'
import { selectUser,logout} from './features/userSlice'
import {auth} from './firebase'
import PersonIcon from '@material-ui/icons/Person';


// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css'
import HeaderOption  from './HeaderOption'



 function Header() {
    const user=useSelector(selectUser)

    const dispatch = useDispatch();

    const mUrl="https://linkedinchat.netlify.app/chats"


    const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut();
    }

    return (
    
        <div className="header">
            
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt="Logo" />
                {!user?<h2 style={{fontWeight:'bold',color:'#0a66c2'}}>LinkedIn</h2> :<div className="header_search">
                    {/* Search */}
                    <SearchIcon />
                    <input placeholder="search" type="text"/>
                </div>}
            </div>
            <div className="header_right">
            {!user?<HeaderOption  Icon={PersonIcon} title="Log-in" />:<HeaderOption  Icon={HomeIcon} title="Home" />}
            {!user?"":<HeaderOption  Icon={SupervisorAccountIcon} title="Connections" />}
            {!user?"":<HeaderOption  Icon={BusinessCenterIcon} title="Jobs" />}
            {!user?"":<HeaderOption url={mUrl} Icon={ChatIcon} title="Messaging" />}
            {!user?"":<HeaderOption  Icon={NotificationIcon} title="Notifications" />}
            {!user?"":<HeaderOption  avatar="true" onClick={logoutOfApp}  title="Logout" />}
            </div>

        
        </div>

    )
}
export default Header;