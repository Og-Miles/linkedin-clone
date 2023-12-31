import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (hash) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{hash}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://unsplash.com/photos/nY14Fs8pxT8/download?force=true&w=640"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar__statNumber">2,637</p>
        </div>

        <div className="sidebar__stat">
          <p>impressions on your post</p>
          <p className="sidebar__statNumber">2,129</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("ui/ux")}
        {recentItem("programing")}
        {recentItem("softwareengineering")}
        {recentItem("web development")}
      </div>
    </div>
  );
}

export default Sidebar;
