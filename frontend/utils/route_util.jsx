import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Component } from 'react';

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

class Redirector extends React.Component {
  
  componentDidUpdate() {
    console.log(this.props.history)
    if(this.props.loggedIn) {
      this.props.history.goBack()
    }
  }

  render () {

    const { component: Component, path, exact } = this.props
  
    return (
      <Route
        path={path} exact={exact} render={
          props => <Component {...props} />
        }
      />
    )
  }
}

const mSTP = state => ({
  loggedIn: !!state.session.id
})

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP, null)(Protected));
export const RedirectorRoute = withRouter(connect(mSTP, null)(Redirector))