import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home_Page/Home';
import Story from './Story_Page/Story';
import Event from './Event_Page/Event';
import Music from './Music_Page/Music';
import Login from './Entry_Page/Login';
import Signup from './Entry_Page/Signup';
import Signin from './Entry_Page/Signin';
import Register from './Entry_Page/Register';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="App">


      {/* <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup/user" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/music" component={Music} />
        </Switch>
      </Router> */}

      <Router>

        {!user ? (
          <>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup/user" component={Register} />
            </Switch>
          </>
        ) : (
          <>

            <div className="app_body">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/story" component={Story} />
                <Route exact path="/event" component={Event} />
                <Route exact path="/music" component={Music} />
              </Switch>

            </div>
          </>
        )}
      </Router>


    </div>
  );
}

export default App;
