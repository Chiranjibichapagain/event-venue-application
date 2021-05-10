import axios from 'axios';
import { Credentials, UserRegistrationData } from '../types';

// const baseUrl = 'https://event-back-server.herokuapp.com/api/admin';
const baseUrl = 'http://localhost:5000/api/admin';

export const createAccount = async (userData: UserRegistrationData) => {
  return await axios.post(baseUrl, userData);
};

export const login = async (credentials: Credentials) => {
  return await axios.post(`${baseUrl}/login`, credentials);
};
