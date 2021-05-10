import React, { useState } from 'react';
import { Calendar, Day } from 'react-modern-calendar-datepicker';
import { FaCalendar, FaUser, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

import Loading from '../Loading';
import { AdminBookingsProps, Venue } from '../../types';
import { useExtractBookingInfo, useExtractDays } from '../../Hooks/useExtractDays';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './AdminBooking.scss';

const AdminBooking = ({ data }: AdminBookingsProps) => {
  const [venueSelection, setVenueSelection] = useState<string>(
    data.length > 0 ? data[0].venueName : ''
  );
  const [selectedDay, setSelectedDay] = React.useState<Day[]>([]);

  const venue = data.find((v: Venue) => v.venueName === venueSelection);
  const [bookings] = useExtractDays(venue);
  const [bookingInfo] = useExtractBookingInfo(venue, selectedDay);

  const handleError = (disabledDay) => {
    setSelectedDay(disabledDay);
  };

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
          disabledDays={bookings}
          onDisabledDayError={handleError}
          shouldHighlightWeekends
        />
      </div>
      {bookingInfo.length != 0 ? (
        <div className="admin-bookings__info">
          <h2 className="admin-bookings__info-title">Booking Details</h2>
          <div className="admin-bookings__info-item">
            <FaCalendar size={30} color="#195e4b" />
            {bookingInfo.dates.map((date) => (
              <p
                key={date._id}
                className="admin-bookings__info-text"
              >{`${date.day}-${date.month}-${date.year}`}</p>
            ))}
          </div>
          <div className="admin-bookings__info-item">
            <FaUser size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo.clientInfo.name}</p>
          </div>
          <div className="admin-bookings__info-item">
            <FaEnvelope size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo.clientInfo.email}</p>
          </div>
          <div className="admin-bookings__info-item">
            <FaPhoneAlt size={30} color="#195e4b" />
            <p className="admin-bookings__info-text">{bookingInfo.clientInfo.phone}</p>
          </div>
          <div className="admin-bookings__info-item">
            <p className="admin-bookings__info-text admin-bookings__info-text--msg">
              {bookingInfo?.clientInfo.message}
            </p>
          </div>
        </div>
      ) : (
        <p className="admin-bookings__info-text admin-bookings__info-text--instruction">
          Disabled days on the calender are booked. Click on the disabled day to view the booking
          details
        </p>
      )}
    </div>
  );
};

export default AdminBooking;
