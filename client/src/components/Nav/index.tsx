import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { UserData } from '../../types';

import logo from '../../Assets/logo.svg';

import './Nav.scss';
import Button from '../Button';

const Nav = ({ log }) => {
  const history = useHistory();
  const [userData, setUserData] = useState<UserData | null>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleLoginSuccess = (response: any) => {
  //   const data = response.profileObj;
  //   const stringData = JSON.stringify(data);
  //   localStorage.setItem('booking-user-info', stringData);
  //   setLog(true);
  // };

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

  const toHome = () => {
    history.push('./');
  };

  // const googleClient = '1022731832769-0epv227hsfh2rpvsgroeg558uttkhg4b.apps.googleusercontent.com';
  return (
    <div className="nav">
      <img onClick={toHome} className="nav__logo" src={logo} alt="logo" />
      {userData && (
        <div className="nav__log-div">
          <div className="nav__profile-div">
            <p className="nav__profile-name">{` Hi ${firstName && firstName[0]}!`}</p>
          </div>
          <FaSignOutAlt onClick={handleLogout} className="nav__icon" color="white" size={40} />
        </div>
      )}
    </div>
  );
};

export default Nav;
