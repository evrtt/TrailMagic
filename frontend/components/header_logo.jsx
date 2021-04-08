import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = (props) => {

  if (props.session.id) {
    return (
      <Link to="/" className="logo-link">
        <span>Trail</span>
        <img className="magic-logo-header" src={window.magicLogoURL} />
        <span>Magic</span>
      </Link>
    )
  } else {
    return (
      <Link to="/" className="logo-link">
        <span>Trail</span>
        <img className="logo-header" src={window.logoURL} />
        <span>Magic</span>
      </Link>
    )
  };
};

export default HeaderLogo;
