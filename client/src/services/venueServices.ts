import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/venue';

export const getAllVenues = async () => {
  return await axios.get(baseUrl);
};

export const getOneVenue = async (venueId) => {
  return await axios.get(`${baseUrl}/${venueId}`);
};

export const editVenue = async (venueId, updates, config) => {
  return await axios.put(`${baseUrl}/${venueId}`, updates, config);
};
