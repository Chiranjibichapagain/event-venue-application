import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Room from '../../components/Room';

import './LandingPage.scss';

const LandingPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/products');
  };
  return (
    <div className="landing">
      <h1 className="landing__head">YOU THINK, WE ORGANIZE!</h1>
      <Room />
      <div className="landing__btn">
        <Button text="Explore venues" modifier="big" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default LandingPage;
