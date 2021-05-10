import axios from 'axios';
import { Config, Venue } from '../types';

// const baseUrl = 'https://event-back-server.herokuapp.com/api/venue';
const baseUrl = 'http://localhost:5000/api/venue';

export const getAllVenues = async () => {
  return await axios.get(baseUrl);
};

export const getOneVenue = async (venueId: string) => {
  return await axios.get(`${baseUrl}/${venueId}`);
};

export const editVenue = async (venueId: string, updates: Partial<Venue>, config: Config) => {
  return await axios.put(`${baseUrl}/${venueId}`, updates, config);
};

export const deleteVenue = async (venueId: string, config: Config) => {
  return await axios.delete(`${baseUrl}/${venueId}`, config);
};

export const addVenue = async (venue: Partial<Venue>, config: Config) => {
  return await axios.post(baseUrl, venue, config);
};
