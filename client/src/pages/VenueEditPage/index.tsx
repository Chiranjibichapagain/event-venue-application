import React from 'react';

import { data } from '../../utils/dummydata';

import './VenueEditPage.scss';

const VenueEditPage = ({ match }) => {
  const id = match.params.id;
  const venue = data && data.find((item) => item.id === parseInt(id));
  console.log('xxx--', venue);
  return <div>This is Edit page</div>;
};

export default VenueEditPage;
