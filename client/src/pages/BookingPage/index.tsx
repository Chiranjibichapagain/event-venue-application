import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';

import { FaUsers } from 'react-icons/fa';
import Button from '../../components/Button';

import './Bookingpage.scss';

const BookingPage = () => {
  const history = useHistory();
  const price = 20;

  const toPay = () => {
    history.push(`/venue/${price}/payment`);
  };

  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);
  console.log('test---', selectedDays);

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
            value={selectedDays}
            onChange={setSelectedDays}
            onDisabledDayError={() => window.alert('This date are already booked!')}
            shouldHighlightWeekends
            disabledDays={[
              { day: 1, month: 3, year: 2021 },
              { day: 2, month: 3, year: 2021 }
            ]}
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
