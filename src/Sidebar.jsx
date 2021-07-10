import React from 'react'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import SidebarRecent from './SidebarRecent'
import './Sidebar.css'
import { selectUser } from './features/userSlice'


function Sidebar(){
    const user=useSelector(selectUser)

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://th.bing.com/th/id/OIP.ehYEeSiG49p6UUu9rc3PBAHaB4?w=350&h=89&c=7&o=5&pid=1.7" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2190</p>
                </div>
                <div className="sidebar_stat">
                    <p>views on post</p>
                    <p className="sidebar_statNumber">290</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                <SidebarRecent topic="django"/>
                <SidebarRecent topic="react-js"/>
                <SidebarRecent topic="Tuesday Trivia @CCA"/>
                <br/>
                <p>Groups</p>
                <SidebarRecent topic="Front-End User"/>
                <SidebarRecent topic="Python Community"/>


            </div>
        </div>
    )
}
export default Sidebar
