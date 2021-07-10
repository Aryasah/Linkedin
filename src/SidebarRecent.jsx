import React from 'react'

const SidebarRecent = ({topic}) => {
    return (   
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
}

export default SidebarRecent
