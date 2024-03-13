import React, { useState } from 'react';
import './Style.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, googleProvider } from '../firebase';

function Signin() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error));
    };

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((result) => {
            dispatch(login({
                email: result.user.email,
                uid: result.user.uid,
                displayName: result.user.displayName,
                profileUrl: result.user.photoURL,
            }))
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
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div>Password (6 or more characters)</div>
                        <Link to={{ pathname: "/" }}>
                            <button className="btns" type="button" onClick={loginToApp}>Sign in</button>
                        </Link>

                        <div className="div">
                            <span> ────────────  or  ────────────</span>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signin