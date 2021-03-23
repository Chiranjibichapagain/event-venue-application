import React, { useState, useEffect } from 'react';
import Filters from '../../components/Filters';

import VenueTile from '../../components/VenueTile';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';

import './HomePage.scss';

const HomePage = () => {
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [venues, setVenues] = useState<Venue[]>(data);

  useEffect(() => {
    handleFilter();
  }, [price, size]);

  console.log('items--', price);

  const handleFilter = () => {
    const priceFilter = () => {
      if (!price) {
        return data;
      } else if (price === 'cheap') {
        return data.sort((a, b) => a.price - b.price);
      } else {
        return data.sort((a, b) => b.price - a.price);
      }
    };

    setVenues(priceFilter);
  };

  console.log(
    'xxxx--',
    venues.map((v) => v.price)
  );

  return (
    <div className="home">
      <Filters setPrice={setPrice} setSize={setSize} />
      <div className="home__venues">
        {venues && venues.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
      </div>
    </div>
  );
};

export default HomePage;
