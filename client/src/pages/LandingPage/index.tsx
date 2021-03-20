import React from 'react';
import Room from '../../components/Room';

import './LandingPage.scss';
const LandingPage = () => {
  return (
    <div className="landing">
      <h1 className="landing__head">YOUR EVENT PLANNER</h1>
      <Room />
    </div>
  );
};

export default LandingPage;
