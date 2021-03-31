import React, { useState, useEffect } from 'react';

import { FaCalendar, FaIgloo, FaPlusCircle } from 'react-icons/fa';

import { data } from '../../utils/dummydata';

import './AdminPage.scss';
import Input from '../../components/Input';
import AdminBooking from '../../components/AdminBooking';

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
        {view === 'venues' && (
          <div>
            <h1>Venue List</h1>
          </div>
        )}
        {view === 'new-venue' && (
          <div>
            <h1>Create New venue</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
