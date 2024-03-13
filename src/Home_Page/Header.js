import React from 'react';
import HeaderProfile from './HeaderProfile';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { logout } from '../features/userSlice';

function Header(props) {

    const dispatch = useDispatch();


	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
		setTimeout(() => {
			window.location.reload(true);
		}, 1);
	}
    
    return (
        <React.Fragment>
            <nav>
                <div className="container">
                    <h2 className="logo">BALLER-X</h2>
                    <div className="search-bar">
                        <i className="uil uil-search"></i>
                        <input type="search" placeholder="Search for creatos, inspirations, and projects" />
                    </div>
                    <div className="create">
                        <div className="profile-photo">
                            <HeaderProfile
					avatar={true}
					title="Logout"
					onClick={logoutOfApp}
				/>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header