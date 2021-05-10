import { Day } from 'react-modern-calendar-datepicker';
import { SetStateAction } from 'react';

type UserInfo = {
  email: string;
  name: string;
  userId: string;
};

export type UserData = {
  token: string;
  userInfo: UserInfo;
};

export type UserRegistrationData = {
  email: string;
  name: string;
  password: string;
};

export type Credentials = {
  email: string;
  password: string;
};

export type ClientInfo = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type Booking = {
  dates: Day[];
  clientInfo: ClientInfo;
};

type Header = {
  authorization: string;
};

export type Config = {
  headers: Header;
};

export type Venue = {
  id: string;
  venueName: string;
  area: string;
  people: number;
  description: string;
  photos: any[];
  features: string[];
  price: number;
  address: string;
  bookings: Booking[];
};

export type Chat = {
  id: string;
  message: string;
  name: string;
  time: string;
  type: 'organize' | 'guest';
};

export type Room = {
  chat: Chat[];
  name: string;
  email: string;
  id: string;
};

export type FeatureOption = {
  value: string;
  label: string;
};

////********** components/pages prop types *******/////// */

export type ButtonProps = {
  text: string;
  modifier?: string;
  handleClick: (() => void) | ((id: any) => void);
};

export type VenueProps = {
  data: Venue;
};

export type InputProps = {
  handleInputChange: () => void;
  handleClick?: () => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  placeholder?: string;
  type: string;
  modifier?: string;
  value?: string | number;
  defaultValue?: string | number;
  id: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  label?: string;
};
export type TextareaProps = {
  handleInputChange: () => void;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  id: string;
  rows: number;
  label: string;
};

export type AdminBookingsProps = {
  data: Venue[];
};

export type AdminVenuesProps = {
  data: Venue[];
};

export type NavProps = {
  log: boolean;
};

export type SupportChatProps = {
  message: Chat;
  id: string;
};
