import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


function Leftsidebar() {

    const user = useSelector(selectUser);

    return (
        <React.Fragment>
            <div className="left">
                <div className="profile">
                    <div className="profile-photo">
                        <Avatar src={user.photoUrl} className="sidebar_avatar">
                            Hi
                        </Avatar>
                    </div>
                    <div className="handle">
                        <h4>{user.displayName}</h4>
                        <h6 className="text-muted">{user.email}</h6>
                    </div>
                </div>
                <div className="sidebar">
                    <Link to="/">
                        <div className="menu-item">
                            <span><i className="uil uil-home"></i></span>
                            <h3>Home</h3>
                        </div>
                    </Link>
                    <Link to='/story'>
                        <div className="menu-item">
                            <span><i className="uil uil-compass"></i></span>
                            <h3>Story</h3>
                        </div>
                    </Link>
                    <Link to='/event'>
                        <div className="menu-item" id="notifications">
                            <span><i className="uil uil-palette"></i></span>
                            <h3>Event</h3>
                        </div>
                    </Link>
                    <Link to="/music">
                        <div className="menu-item" id="messages-notification">
                            <span><i className="uil uil-music"></i></span>
                            <h3>Music</h3>
                        </div>
                    </Link>
                </div>

                <label className="btn" style={{ borderRadius: '.5rem', backgroundColor: '#000000', color:'white', fontSize:'1.5rem',fontWeight:'bolder'}} >BALLER-X</label>
            </div>

        </React.Fragment>
    )
}

export default Leftsidebar