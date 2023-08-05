import { useSelector } from "react-redux";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/counter/userSlice";

function HeaderOption({ avatar, title, Icon, onclick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onclick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user.photoUrl}>
          {user.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
