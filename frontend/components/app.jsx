import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import HeaderLogoContainer from './header_logo_container';


export default () => (
  <section className="main">
    <header className="site-header">
        <nav className="header-nav">
          <span>Explore</span>
        </nav>
        <HeaderLogoContainer />
        <WelcomeContainer />
    </header>
    <section className="main-section">
      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        {/* <Route exact path='/' component={SplashContainer} /> */}
      </Switch>
    </section>
    <footer className="footer">
      <Link to="/" className="logo-link">
        <img className="logo" src={window.logoURL} />
        <span>TrailMagic</span>
      </Link>
      <div className="icons">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>

    </footer>
  </section>
);