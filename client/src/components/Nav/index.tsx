import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { UserData } from '../../types';

import logo from '../../Assets/logo3.png';

import './Nav.scss';

const Nav = () => {
  const history = useHistory();
  const [log, setLog] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginSuccess = (response: any) => {
    const data = response.profileObj;
    const stringData = JSON.stringify(data);
    localStorage.setItem('booking-user-info', stringData);
    setLog(true);
  };

  useEffect(() => {
    const localData = localStorage.getItem('booking-user-info');
    const parsedData = localData && JSON.parse(localData);
    setUserData(parsedData);
  }, [log]);

  const handleLoginFail = () => {
    console.log('failed');
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('quiz-user-info');
    setLog(false);
  };
  const toHome = () => {
    history.push('./');
  };

  const googleClient = '1022731832769-0epv227hsfh2rpvsgroeg558uttkhg4b.apps.googleusercontent.com';
  return (
    <div className="nav">
      <img onClick={toHome} className="nav__logo" src={logo} alt="logo" />
      {!userData ? (
        <GoogleLogin
          className="nav__login"
          clientId={googleClient}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFail}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div className="nav__log-div">
          <GoogleLogout
            clientId={googleClient}
            buttonText="Log Out"
            onLogoutSuccess={handleLogout}
          />
          <div className="nav__profile-div">
            <img className="nav__profile-img" src={userData.imageUrl} alt={userData.imageUrl} />
            <p className="nav__profile-name">{` Hi ${userData.givenName}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
