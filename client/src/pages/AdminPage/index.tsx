import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { FaCalendar, FaIgloo, FaPlusCircle } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';

import AdminBooking from '../../components/AdminBooking';
import AdminVenues from '../../components/AdminVenues';
import AdminAddVenue from '../../components/AdminAddVenue';

import './AdminPage.scss';
import { getAllVenues } from '../../services/venueServices';
import AdminSupport from '../../components/AdminSupport';

function AdminPage() {
  const socket = io('http://localhost:5000');
  const [view, setView] = useState('bookings');
  const [data, setData] = useState('');
  const [notification, setNotification] = useState<string>('');

  const fetchVenues = () => {
    getAllVenues().then((response: any) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const handleSupportClick = () => {
    setView('support');
    setNotification('');
  };

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
        <div
          onClick={handleSupportClick}
          className={
            view === 'support' ? 'admin__nav-items admin__nav-items--active' : 'admin__nav-items'
          }
        >
          <BiSupport className="admin__icon" />
          <span className="admin__nav-text">Support</span>
          <span className="admin__notification">{notification}</span>
        </div>
      </div>

      <div className="admin__main">
        {view === 'bookings' && <AdminBooking data={data} />}
        {view === 'venues' && <AdminVenues data={data} />}
        {view === 'new-venue' && <AdminAddVenue setPage={setView} />}
        {view === 'support' && <AdminSupport setNotification={setNotification} />}
      </div>
    </div>
  );
}

export default AdminPage;
