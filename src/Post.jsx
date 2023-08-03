import { Avatar } from "@mui/material";
import { forwardRef } from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InputOption from "./InputOption";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <div className="post__header__left">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__header__right">
          <div className="menu">
            <MoreHorizIcon />
          </div>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="send" />
      </div>
    </div>
  );
});

export default Post;
