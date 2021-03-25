import React from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';

import { FaUsers } from 'react-icons/fa';
import Button from '../../components/Button';

import './Bookingpage.scss';

const BookingPage = () => {
  const history = useHistory();
  const price = 20;

  const toPay = () => {
    history.push(`/venue/${price}/payment`);
  };

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
          <Calendar />
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
