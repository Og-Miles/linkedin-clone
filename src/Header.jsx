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
                <HeaderOption avatar="https://pixabay.com/illustrations/ai-generated-man-gentleman-male-8015967/" title="me" />

        </div>
    </div>
  )
}

export default Header