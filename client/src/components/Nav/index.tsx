import React from 'react';

import logo from '../../Assets/logo2.svg';
import './Nav.scss';
const Nav = () => {
  return (
    <div className="nav">
      <img className="nav__logo" src={logo} alt="logo" />
    </div>
  );
};

export default Nav;
