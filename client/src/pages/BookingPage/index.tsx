import React from 'react';
import { useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';

import { FaUsers } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import './Bookingpage.scss';

const BookingPage = () => {
  const history = useHistory();
  const price = 20;

  const toPay = () => {
    history.push(`/venue/${price}/payment`);
  };

  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);
  console.log('test---', selectedDays);

  const handleInputChange = () => {
    console.log('handled');
  };

  return (
    <div className="booking">
      <div className="booking__head">
        <p className="booking__text booking__text--big">Longue 1</p>{' '}
        <div className="booking__people-div">
          <FaUsers color="#2a2a2a" size={35} />
          <p className="booking__text booking__text--medium">200</p>
        </div>
        <p className="booking__text booking__text--medium">1000€/day</p>
      </div>
      <div className="booking__body">
        <div className="booking__date-picker">
          <Calendar
            calendarClassName="calender"
            calendarSelectedDayClassName="calender__selected"
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
          <p className="booking__text booking__text--medium">
            Booking Date(s) :{' '}
            {selectedDays.map((d) => (
              <li className="booking__list">{`${d.day}- ${d.month}- ${d.year}`}</li>
            ))}{' '}
          </p>
          <p className="booking__text booking__text--small">Total: {selectedDays.length * 1000}€</p>
          <Input type="text" placeholder="Full Name" handleInputChange={handleInputChange} />
          <Input type="text" placeholder="Email address" handleInputChange={handleInputChange} />
          <Input type="text" placeholder="Phone Number" handleInputChange={handleInputChange} />
          <textarea
            className="booking__textarea"
            rows={5}
            placeholder="Write message, questions etc."
          />
          <Button text="Confirm & pay" modifier="small" handleClick={toPay} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
