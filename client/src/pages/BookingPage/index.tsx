import React from 'react';
import { useHistory } from 'react-router-dom';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, Day } from 'react-modern-calendar-datepicker';
import { FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

import Button from '../../components/Button';
import { useForm } from '../../Hooks/useForm';
import Input from '../../components/Input';
import { data } from '../../utils/dummydata';
import { useExtractDays } from '../../Hooks/useExtractDays';

import './Bookingpage.scss';

const BookingPage = ({ match }) => {
  const id = match.params.venueId;
  const venue = data && data.find((item) => item.id === parseInt(id));
  const [bookings] = useExtractDays(venue);

  const history = useHistory();

  const [fields, setFields] = useForm({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { name, email, phone, message } = fields;

  const [selectedDays, setSelectedDays] = React.useState<Day[]>([]);
  const totalCost = venue ? venue.price * selectedDays.length : 0;

  const bookingInfo = {
    selectedDays,
    totalCost,
    fields
  };

  console.log('try-it', bookingInfo);

  const toPay = () => {
    history.push(`/venue/${totalCost}/payment`);
  };

  return (
    <div className="booking">
      <div className="booking__head">
        <p className="booking__text booking__text--big">{venue?.venueName}</p>{' '}
        <div className="booking__people-div">
          <FaMapMarkerAlt color="#2a2a2a" size={30} />
          <p className="booking__text booking__text--medium"> {venue?.address} </p>
        </div>
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
            disabledDays={bookings}
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
          <Button text="Make Payment" modifier="small" handleClick={toPay} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
