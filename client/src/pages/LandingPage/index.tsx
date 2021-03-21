import React from 'react';
import Button from '../../components/Button';
import Room from '../../components/Room';

import './LandingPage.scss';
const LandingPage = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className="landing">
      <h1 className="landing__head">YOUR EVENT PLANNER</h1>
      <Room />
      <div className="landing__btn">
        <Button text="Get Started" modifier="big" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default LandingPage;
