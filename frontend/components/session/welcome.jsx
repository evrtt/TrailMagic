import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout } ) => {

  if(currentUser) {
    return (
      <div className="dropdown">
        <div className="dropdown-button">{currentUser.username}</div>
        <ul className="dropdown-content" >
          <li>
            <button 
              onClick={() => logout()} 
              className="dropdown-content-button" 
            >Log out</button>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="welcome-comp">
        <Link to="/signup" className="signup-link">Sign up</Link>
        <br/>
        <Link to="/login" className="login-link">Log in</Link>
      </div>
    )
  }
}

export default Welcome;