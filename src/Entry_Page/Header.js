import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <Link to={{ pathname: "/signup" }}>
            <span className="btn btn-primary">Join now</span>
          </Link>
          <div>
            <h2 className="logo search-bar">BALLER-X</h2>
          </div>
          <div className="create">
            <Link to={{ pathname: "/signin" }}>
              <button className="btn btn-primary" type="button">Sign in</button>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header