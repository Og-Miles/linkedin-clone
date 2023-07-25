import { Avatar } from '@mui/material'
import './Post.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import InputOption from './InputOption';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__header__left">
            <Avatar  />
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
            <InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray'/>
            <InputOption Icon={ChatOutlinedIcon} title='comment' color='gray'/>
            <InputOption Icon={ShareOutlinedIcon} title='share' color='gray'/>
            <InputOption Icon={SendOutlinedIcon} title='Like' color='send'/>
        </div>
    </div>
  )
}

export default Post