import React from 'react';
import Filters from '../../components/Filters';

import VenueTile from '../../components/VenueTile';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home">
      <Filters />
      <div className="home__venues">
        {data && data.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
      </div>
    </div>
  );
};

export default HomePage;
