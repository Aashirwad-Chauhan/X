import { Avatar } from '@material-ui/core';
import React from 'react';
import './Style.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderProfile({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);
  
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl} />}
      <h6 className="headerOption_title" style={{marginLeft:'.8rem'}}>{title}</h6>
    </div>
  )
}

export default HeaderProfile