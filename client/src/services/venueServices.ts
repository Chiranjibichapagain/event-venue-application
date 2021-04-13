import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/admin';

export const getAllVenues = async () => {
  return await axios.post(baseUrl);
};
