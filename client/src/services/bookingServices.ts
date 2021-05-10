import axios from 'axios';
import { Booking } from '../types';
const baseUrl = 'http://localhost:5000/api/booking';

export const makeBooking = async (bookingData: Booking) => {
  return await axios.post(baseUrl, bookingData);
};

export const getABooking = async (bookingId: string) => {
  return await axios.get(`${baseUrl}/${bookingId}`);
};
