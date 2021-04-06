import React, { useState, useEffect } from 'react';

import { FaCalendar, FaIgloo, FaPlusCircle } from 'react-icons/fa';

import { data } from '../../utils/dummydata';

import './AdminPage.scss';
import Input from '../../components/Input';
import AdminBooking from '../../components/AdminBooking';
import AdminVenues from '../../components/AdminVenues';
import AdminAddVenue from '../../components/AdminAddVenue';

function AdminPage() {
  const [view, setView] = useState('bookings');

  return (
    <div className="admin">
      <div className="admin__aside">
        <div
          onClick={() => setView('bookings')}
          className={
            view === 'bookings' ? 'admin__nav-items admin__nav-items--active' : 'admin__nav-items'
          }
        >
          {' '}
          <FaCalendar className="admin__icon" /> <span className="admin__nav-text">Bookings</span>
        </div>
        <div
          onClick={() => setView('venues')}
          className={
            view === 'venues' ? 'admin__nav-items admin__nav-items--active' : 'admin__nav-items'
          }
        >
          {' '}
          <FaIgloo className="admin__icon" /> <span className="admin__nav-text">Venues</span>
        </div>
        <div
          onClick={() => setView('new-venue')}
          className={
            view === 'new-venue' ? 'admin__nav-items admin__nav-items--active' : 'admin__nav-items'
          }
        >
          {' '}
          <FaPlusCircle className="admin__icon" /> <span className="admin__nav-text">Add New</span>
        </div>
      </div>

      <div className="admin__main">
        {view === 'bookings' && <AdminBooking data={data} />}
        {view === 'venues' && <AdminVenues data={data} />}
        {view === 'new-venue' && <AdminAddVenue setPage={setView} />}
      </div>
    </div>
  );
}

export default AdminPage;
