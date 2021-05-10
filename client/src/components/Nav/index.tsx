import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { NavProps, UserData } from '../../types';

import logo from '../../Assets/logo.svg';
import './Nav.scss';

const Nav = ({ log }: NavProps) => {
  const history = useHistory();
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    const localData = localStorage.getItem('venue-app');
    const parsedData = localData && JSON.parse(localData);
    setUserData(parsedData);
  }, [log]);

  const firstName = userData && userData.userInfo.name.split(' ');

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('venue-app');
    history.push('/');
  };

  return (
    <div className="nav">
      <div className="nav__main">
        <img onClick={() => history.push('/')} className="nav__logo" src={logo} alt="logo" />
        {!userData && (
          <p onClick={() => history.push('/admin/login')} className="nav__admin-log">
            Admin Login
          </p>
        )}
      </div>
      {userData && (
        <div className="nav__log-div">
          <div className="nav__profile-div">
            <p onClick={() => history.push('/admin')} className="nav__profile-name">
              {firstName && firstName[0]}
            </p>
          </div>
          <FaSignOutAlt onClick={handleLogout} className="nav__icon" />
        </div>
      )}
    </div>
  );
};

export default Nav;
