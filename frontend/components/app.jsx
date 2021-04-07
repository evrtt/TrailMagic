import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import FontAwesome from 'react-fontawesome';

export default () => (
  <section className="main">
    <header className="site-header">
        <nav className="header-nav">
          <span>Explore</span>
        </nav>
        <div className="logo-container">
          <span>TrailMagic</span>
        </div>
        <WelcomeContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      {/* <Route exact path='/' component={SplashContainer} /> */}
    </Switch>
  </section>
);