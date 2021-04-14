import { Day } from 'react-modern-calendar-datepicker';
import { getABooking } from '../services/bookingServices';

type Dates = {
  _id: string;
  day: number;
  month: number;
  year: number;
};

export const useExtractDays = (data) => {
  const dates: Dates[] = [];
  if (data && data.bookings.length != 0) {
    data.bookings.map((item) => dates.push(item.dates));
  }
  const allDates = dates.concat.apply([], dates);
  const bookings = allDates.map((item) => ({ day: item.day, month: item.month, year: item.year }));

  return [bookings];
};

export const useExtractBookingInfo = (venue, selectedDay) => {
  if (selectedDay.length != 0) {
    const x = venue.bookings;
    const bookingInfo = x.find((b) => b.dates.find((d) => d.day === selectedDay.day));
    return [bookingInfo];
  } else {
    const bookingInfo = [];
    return [bookingInfo];
  }
};
