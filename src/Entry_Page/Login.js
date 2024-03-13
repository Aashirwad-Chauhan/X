import React from 'react'
import Header from './Header'
import './Style.css'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth, googleProvider } from '../firebase';

function Login() {

    const dispatch = useDispatch();

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
                <Header />
                <img className="wave" src="assets/images/wave.png" alt='DP' />
                <div className="img">
                    <img src="assets/images/sms_check.png" alt='DP' />
                </div>
                <div className="login-content">
                    <form>
                        <img src="assets/images/boy.png" alt="DP" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">

                        </div>

                        {/* <Link to='/home'> */}
                            <button type="button" className="btns" onClick={signInWithGoogle}>Sign in with Google </button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login