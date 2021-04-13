import { Day } from 'react-modern-calendar-datepicker';
import { getABooking } from '../services/bookingServices';

export const useExtractDays = (bookings) => {
  const dates: Day[] = [];

  const getData = async () => {
    await getABooking(bookings && bookings[0]).then(async (res) => {
      dates.push(res.data.dates);
    });
  };

  getData();

  // bookings &&
  //   bookings.map((item) => {
  //     getABooking(item).then((res) => {
  //       dates.push({ day: 3, month: 4, year: 2021 });
  //     });
  //   });
  console.log('test--', dates);
  return [bookings];
};
