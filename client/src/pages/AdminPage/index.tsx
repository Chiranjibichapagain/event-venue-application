import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';
import { FaCalendar, FaIgloo, FaPlusCircle } from 'react-icons/fa';

import { data } from '../../utils/dummydata';

import './AdminPage.scss';
import Input from '../../components/Input';
import { Venue } from '../../types';

function AdminPage() {
  const [view, setView] = useState('bookings');
  const [venueSelection, setVenueSelection] = useState('Longue-1');
  const [venue, setVenue] = useState<Venue>();
  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);

  useEffect(() => {
    const venueData = data.find((v) => v.venueName === venueSelection);
    console.log('try--', venueData);
    setVenue(venueData);
  }, [venueSelection]);

  console.log('xx--', venueSelection);

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
        <h1 className="admin__heading">Admin Dashboard</h1>
        {view === 'bookings' && (
          <div>
            <select
              onChange={(e: any): void => setVenueSelection(e.target.value)}
              value={venueSelection}
            >
              {data.map((v, index) => (
                <option key={index}>{v.venueName}</option>
              ))}
            </select>
            <Calendar
              calendarClassName="admin__calender"
              calendarSelectedDayClassName="calender__selected"
              value={selectedDays}
              onChange={setSelectedDays}
              onDisabledDayError={() => window.alert('This date are already booked!')}
              shouldHighlightWeekends
              disabledDays={venue?.bookings}
            />
          </div>
        )}
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
