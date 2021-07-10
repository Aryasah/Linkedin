import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'


const HeaderOption = ({Icon ,title,avatar,onClick,handleOpen,url}) => {
    const user=useSelector(selectUser)
    return (
        <div   onClick={onClick} className="headerOption">
            <a href={url}>
            {Icon &&
            <Icon className="headerOption_icon" />
            }
            </a>
            {avatar && <Avatar className="headerOption_icon" src={user?user.photoUrl:''}>{user?.email[0]}</Avatar>}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}
export default HeaderOption;
