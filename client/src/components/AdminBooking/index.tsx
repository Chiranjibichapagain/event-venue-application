import React, { useState, useEffect } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';
import { FaCalendar, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import { AdminBookingsProps, Venue } from '../../types';
import { useExtractDays } from '../../Hooks/useExtractDays';

import './AdminBooking.scss';

const AdminBooking = ({ data }) => {
  if (!data) {
    return <h1>No data</h1>;
  }

  const [venueSelection, setVenueSelection] = useState(data[0].venueName);
  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);

  const venue = data.find((v) => v.venueName === venueSelection);
  const [bookings] = useExtractDays(venue);
  const bookingInfo = venue.bookings.find((b) => b.dates === selectedDays[0]);

  console.log('ddd--', bookings);

  // console.log('venue--', venue.bookings[0].dates);
  return (
    <div className="admin-bookings">
      <div className="admin-bookings__calender-div">
        <select
          className="admin-bookings__select"
          onChange={(e: any): void => setVenueSelection(e.target.value)}
          value={venueSelection}
        >
          {data && data.map((v, index) => <option key={index}>{v.venueName}</option>)}
        </select>
        <Calendar
          calendarClassName="admin-bookings__calender"
          calendarSelectedDayClassName="calender__selected"
          value={bookings}
          onChange={setSelectedDays}
          shouldHighlightWeekends
        />
      </div>
      {/* {bookingInfo && (
        <div className="admin-bookings__info">
          <h2 className="admin-bookings__info-title">Booking Details</h2>
          <div className="admin-bookings__info-item">
            <FaCalendar size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{`${bookingInfo?.dateInfo.day}-${bookingInfo?.dateInfo.month}-${bookingInfo?.dateInfo.year}`}</p>
          </div>
          <div className="admin-bookings__info-item">
            <FaUser size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo?.clientInfo.name}</p>
          </div>
          <div className="admin-bookings__info-item">
            <FaEnvelope size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo?.clientInfo.email}</p>
          </div>
          <div className="admin-bookings__info-item">
            <FaPhoneAlt size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo?.clientInfo.phone}</p>
          </div>
          <div className="admin-bookings__info-item">
            <p className="admin-bookings__info-text admin-bookings__info-text--msg">
              {bookingInfo?.clientInfo.message}
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AdminBooking;
