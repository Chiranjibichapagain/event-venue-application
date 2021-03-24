import React from 'react';
import { useHistory } from 'react-router-dom';

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
        <p>Longue 1</p>
        <div>
          <p>200</p>
        </div>
        <div>
          <p>100€/h</p>
        </div>
      </div>
      <div className="booking__body">
        <div>calander</div>
        <div className="booking__form">
          <p>Booking Date: </p>
          <div className="booking__time-div"></div>
        </div>
        <Button text="Confirm & pay" modifier="small" handleClick={toPay} />
      </div>
    </div>
  );
};

export default BookingPage;
