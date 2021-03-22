import React from 'react';

import VenueTile from '../../components/VenueTile';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home">
      {data && data.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
    </div>
  );
};

export default HomePage;
