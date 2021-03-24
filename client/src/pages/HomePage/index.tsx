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
    console.log(
      'venuee--',
      venues.map((v) => v.price)
    );
  }, [price, size, venues]);

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
    const sizeFilter = () => {
      if (!size) {
        return priceFilter();
      } else if (size === 'small') {
        return priceFilter().sort((a, b) => a.people - b.people);
      } else {
        return priceFilter().sort((a, b) => b.people - a.people);
      }
    };

    setVenues(sizeFilter());
  };

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
