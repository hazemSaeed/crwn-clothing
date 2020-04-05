import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-header">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
