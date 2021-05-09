import axios from 'axios';
const baseUrl = 'http://localhost:5000/api/booking';

export const makeBooking = async (bookingData) => {
  return await axios.post(baseUrl, bookingData);
};

export const getABooking = async (bookingId) => {
  return await axios.get(`${baseUrl}/${bookingId}`);
};
