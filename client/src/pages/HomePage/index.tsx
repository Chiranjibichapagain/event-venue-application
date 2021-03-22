import React from 'react';

import VenueTile from '../../components/VenueTile';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';

console.log('xxxx---', data);

import './HomePage.scss';
const HomePage = () => {
  return (
    <div className="home">{data && data.map((venue: Venue) => <VenueTile data={venue} />)}</div>
  );
};

export default HomePage;
