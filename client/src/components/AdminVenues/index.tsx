import React, { useState } from 'react';
import { AdminVenuesProps } from '../../types';

import './AdminVenues.scss';

const AdminVenues = ({ data }: AdminVenuesProps) => {
  const [venueSelection, setVenueSelection] = useState('Longue-1');

  return (
    <div className="admin-venues">
      <h1 className="admin-venues__title">Venues</h1>
      <select
        className="admin-venues__select"
        onChange={(e: any): void => setVenueSelection(e.target.value)}
        value={venueSelection}
      >
        {data.map((v, index) => (
          <option key={index}>{v.venueName}</option>
        ))}
      </select>
    </div>
  );
};

export default AdminVenues;
