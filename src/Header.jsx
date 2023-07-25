import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import  BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import  ChatIcon  from "@mui/icons-material/Chat";
import  NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
        <img  height="40" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>

            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar="https://images.unsplash.com/photo-1441786485319-5e0f0c092803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBhdmF0YXIlMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" title="me" />

        </div>
    </div>
  )
}

export default Header