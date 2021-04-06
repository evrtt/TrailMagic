import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path} exact={exact} render={props => 
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact}) => (
  <Route 
    path={path} exact={exact} render={props => 
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mSTP = state => {

  let loggedIn;
  if (state.session.id) {
    loggedIn = true;
  } else {
    loggedIn = false;
  }
  return { loggedIn: loggedIn }
}

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));