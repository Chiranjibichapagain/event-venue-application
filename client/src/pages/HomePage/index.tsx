import React, { useState, useEffect } from 'react';
import Filters from '../../components/Filters';

import VenueTile from '../../components/VenueTile';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';
import { useFilter } from '../../Hooks/useFilter';

import './HomePage.scss';

const HomePage = () => {
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');

  const [venue] = useFilter(price, size);

  return (
    <div className="home">
      <Filters setPrice={setPrice} setSize={setSize} />
      <div className="home__venues">
        {venue && venue.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
      </div>
    </div>
  );
};

export default HomePage;
