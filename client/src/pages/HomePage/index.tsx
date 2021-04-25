import React, { useState, useEffect } from 'react';
import Filters from '../../components/Filters';
import axios from 'axios';

import VenueTile from '../../components/VenueTile';
import { getAllVenues } from '../../services/venueServices';
import { Venue } from '../../types';

import './HomePage.scss';

const HomePage = () => {
  const [data, setData] = useState<Venue[]>([]);

  const fetchVenues = () => {
    getAllVenues().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchVenues();
  }, []);
  console.log('venues--', data);

  return (
    <div className="home">
      <div className="home__venues">
        {data && data.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
      </div>
    </div>
  );
};

export default HomePage;
