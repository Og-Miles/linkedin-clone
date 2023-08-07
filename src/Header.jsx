import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Menu.css";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/counter/userSlice";

function Header() {
  const dispatch = useDispatch();
  const [overlay, setOverlay] = useState(false);
  const items = ["Profile", "Logout"];

  const handleLogoutClick = () => {
    dispatch(logout());
    auth.signOut();
  };

  const toggleOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img
          height='40'
          src='https://img.icons8.com/color/48/linkedin.png'
          alt='linkedin'
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>

      {/* Render the overlay based on the overlay state */}
      {overlay && (
        <div className='overlay scale-up-center'>
          <div className='overlay__menu'>
            <ul className='overlay__menu__list'>
              {items.map((item, index) => (
                <li
                  className='overlay__menu__list__item'
                  key={index}
                  onClick={
                    item === "Logout" ? handleLogoutClick : toggleOverlay
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notification' />
        <HeaderOption avatar={true} title='me' onclick={toggleOverlay} />
      </div>

      <div className='header__right__mobile'>
        <HeaderOption avatar={true} title='me' onclick={toggleOverlay} />
      </div>
    </div>
  );
}

export default Header;
