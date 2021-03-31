import { Day } from 'react-modern-calendar-datepicker';

export const useExtractDays = (venue) => {
  const bookings: Day[] = [];
  venue?.bookings.forEach((b) => bookings.push(b.dateInfo));
  return [bookings];
};
