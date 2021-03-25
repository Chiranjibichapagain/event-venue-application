import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayRange } from 'react-modern-calendar-datepicker';

import { FaUsers } from 'react-icons/fa';
import Button from '../../components/Button';

import './Bookingpage.scss';

const BookingPage = () => {
  const history = useHistory();
  const price = 20;

  const toPay = () => {
    history.push(`/venue/${price}/payment`);
  };
  const defaultFrom = {
    year: 2019,
    month: 4,
    day: 16
  };
  const defaultTo = {
    year: 2019,
    month: 4,
    day: 19
  };

  const [selectedDayRange, setSelectedDayRange] = React.useState<DayRange>({
    from: null,
    to: null
  });

  return (
    <div className="booking">
      <div className="booking__head">
        <p className="booking__text booking__text--big">Longue 1</p>{' '}
        <div className="booking__people-div">
          <FaUsers color="#2a2a2a" size={35} />
          <p className="booking__text booking__text--medium">200</p>
        </div>
        <p className="booking__text booking__text--medium">100€/h</p>
      </div>
      <div className="booking__body">
        <div className="booking__calender">
          <Calendar
            value={selectedDayRange}
            onChange={setSelectedDayRange}
            shouldHighlightWeekends
          />
        </div>
        <div className="booking__form">
          <p>Booking Date: </p>
          <div className="booking__time-div"></div>
          <div className="booking__btn-div">
            <Button text="Confirm & pay" modifier="small" handleClick={toPay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
