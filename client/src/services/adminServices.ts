import axios from 'axios';

const baseUrl = 'api/admin';

export const createAccount = async (userData) => {
  return await axios.post(baseUrl, userData);
};

export const login = async (credentials) => {
  return await axios.post(`${baseUrl}/login`, credentials);
};
