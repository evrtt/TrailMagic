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
            >Logout</button>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="welcome-comp">
        <Link to="/signup" className="signup-link">Sign Up</Link>
        <br/>
        <Link to="/login" className="login-link">Login</Link>
      </div>
    )
  }
}

export default Welcome;