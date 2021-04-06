import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout } ) => {

  if(currentUser) {
    return (
      <div className="welcome-comp">
        <h3>Howdy {currentUser.username}</h3>
        <button onClick={() => logout()}>Signout</button>
      </div>
    )
  } else {
    return (
      <div className="welcome-comp">
        <Link to="/signup">Sign Up</Link>
        <br/>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Welcome;