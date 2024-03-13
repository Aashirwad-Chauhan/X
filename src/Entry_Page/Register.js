import React, { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';

function Register(props) {


  const email = props.location.state.userdata.email;
  const password = props.location.state.userdata.password;

  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    };

    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            }))
          })
      }).catch(error => alert(error));
  };

  return (
    <React.Fragment>
      <div className="containers">
        <img className="wave" src="assets/images/wave.png" alt='DP' />
        <div className="img">
          <img src="assets/images/login.png" alt='DP' />
        </div>
        <div className="login-content">
          <form>
            <h2 className="title">Fill the details</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder=""
                /><div>Full name (required if registering)</div>
              </div>
            </div>
            
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  value={profilePic}
                  onChange={e => setProfilePic(e.target.value)}
                  placeholder=""
                /><div>Profile picture URL (optional)</div>
              </div>
            </div>
            <Link to={{ pathname: "/" }}>
              <button className="btns" type="submit" onClick={register}>Continue</button>
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Register