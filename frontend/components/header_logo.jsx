import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
      <Link to="/" className="logo-link">
        <img className="logo-header" src={window.logoURL} />
        <span>TrailMagic</span>
      </Link>
    )
};

export default HeaderLogo;
