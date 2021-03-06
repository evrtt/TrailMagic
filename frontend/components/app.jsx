import React from 'react';
import WelcomeContainer from './session/welcome_container';
import { Link, Route, Switch } from 'react-router-dom'
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import { 
  RedirectorRoute
} from '../utils/route_util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import HeaderLogo from './header_logo';
import SplashContainer from './splash/splash_container';
import TrailIndexContainer from './trails/trail_index_container';
import TrailContainer from './trails/trail_container';
import ModalContainer from './modal/modal_container';



export default () => (
  <section className="main">
    <ModalContainer />
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
        <RedirectorRoute exact path='/signup' component={SignUpFormContainer} />
        <RedirectorRoute exact path='/login' component={LoginFormContainer} />
        <Route exact path='/' component={SplashContainer} />
        <Route exact path='/trails' component={TrailIndexContainer} />
        <Route path='/trails/:trailId' component={TrailContainer} />
      </Switch>
    </section>
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="logo-link">
          <img className="logo" src={window.logoURL} />
          <span>TrailMagic</span>
        </Link>
        <div className="icons-container">
          <span>Find me on</span>
          <div className="icons">
            <a 
              href="https://www.linkedin.com/in/everett-smith-924798153"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/evrtt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </section>
);