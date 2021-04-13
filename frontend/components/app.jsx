import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import HeaderLogo from './header_logo';
import SplashContainer from './splash/splash_container';
import TrailIndexContainer from './trails/trail_index_container';



export default () => (
  <section className="main">
    <header className="site-header">
        <nav className="header-nav">
          <Link to="/trails" className="explore-link">
            <span>Explore</span>
          </Link>
        </nav>
        <HeaderLogo />
        <WelcomeContainer />
    </header>
    <section className="main-section">
      <Switch>
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/trails' component={TrailIndexContainer} />
        {/* <Route exact path='/trails/:id' component={TrailContainer} /> */}
        <Route exact path='/' component={SplashContainer} />
      </Switch>
    </section>
    <footer className="footer">
      <Link to="/" className="logo-link">
        <img className="logo" src={window.logoURL} />
        <span>TrailMagic</span>
      </Link>
      <div className="icons-container">
        <span>Find me on</span>
        <div className="icons">
          <a href="https://www.linkedin.com/in/everett-smith-924798153">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/evrtt">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

    </footer>
  </section>
);