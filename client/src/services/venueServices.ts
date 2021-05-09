import axios from 'axios';

const baseUrl = 'api/venue';

export const getAllVenues = async () => {
  return await axios.get(baseUrl);
};

export const getOneVenue = async (venueId) => {
  return await axios.get(`${baseUrl}/${venueId}`);
};

export const editVenue = async (venueId, updates, config) => {
  return await axios.put(`${baseUrl}/${venueId}`, updates, config);
};

export const deleteVenue = async (venueId, config) => {
  return await axios.delete(`${baseUrl}/${venueId}`, config);
};

export const addVenue = async (venue, config) => {
  return await axios.post(baseUrl, venue, config);
};
