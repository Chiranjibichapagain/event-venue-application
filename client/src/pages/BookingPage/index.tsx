import React from 'react';
import { useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';

import { FaUsers } from 'react-icons/fa';
import Button from '../../components/Button';
import { useBookingForm } from '../../Hooks/useBookingForm';
import Input from '../../components/Input';

import './Bookingpage.scss';
import { data } from '../../utils/dummydata';

const BookingPage = ({ match }) => {
  const id = match.params.venueId;
  const venue = data && data.find((item) => item.id === parseInt(id));

  const history = useHistory();
  const price = 20;

  const [fields, setFields] = useBookingForm({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { name, email, phone, message } = fields;

  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);

  const toPay = () => {
    history.push(`/venue/${price}/payment`);
  };

  return (
    <div className="booking">
      <div className="booking__head">
        <p className="booking__text booking__text--big">{venue?.venueName}</p>{' '}
        <div className="booking__people-div">
          <FaUsers color="#2a2a2a" size={35} />
          <p className="booking__text booking__text--medium"> {venue?.people} </p>
        </div>
        <p className="booking__text booking__text--medium">{`${venue?.price}€/day`}</p>
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
            disabledDays={venue?.bookings}
          />
        </div>
        <div className="booking__form">
          <p className="booking__text booking__text--medium">
            Booking Date(s) :{' '}
            {selectedDays.map((d, index) => (
              <li key={index} className="booking__list">{`${d.day}- ${d.month}- ${d.year}`}</li>
            ))}{' '}
          </p>
          <p className="booking__text booking__text--small">Total: {selectedDays.length * 1000}€</p>
          <Input
            value={name}
            id="name"
            type="text"
            placeholder="Full Name"
            handleInputChange={setFields}
          />
          <Input
            value={email}
            id="email"
            type="email"
            placeholder="Email address"
            handleInputChange={setFields}
          />
          <Input
            value={phone}
            id="phone"
            type="tel"
            placeholder="Phone Number"
            handleInputChange={setFields}
          />
          <textarea
            onChange={setFields}
            value={message}
            id="message"
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
