import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';

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

  return (
    <div className="home">
      <div className="home__venues">
        {data && data.map((venue: Venue) => <VenueTile key={venue.id} data={venue} />)}
        {data.length === 0 && <Loading />}
      </div>
    </div>
  );
};

export default HomePage;
