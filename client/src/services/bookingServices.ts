import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/booking';

export const makeBooking = async (bookingData) => {
  return axios.post(baseUrl, bookingData);
};
