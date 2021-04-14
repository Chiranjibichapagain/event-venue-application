import { Day } from 'react-modern-calendar-datepicker';

type UserInfo = {
  email: string;
  name: string;
  userId: string;
};
export type UserData = {
  token: string;
  userInfo: UserInfo;
};

export type ButtonProps = {
  text: string;
  modifier?: string;
  handleClick: (() => void) | ((id: any) => void);
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

export type Venue = {
  id: number;
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

export type VenueProps = {
  data: Venue;
};

export type FilterProps = {
  setSize: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
};

export type InputProps = {
  handleInputChange: () => void;
  handleClick?: () => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  placeholder?: string;
  type: string;
  modifier?: string;
  value: string | number;
  id: string;
  minLength?: number;
  maxLength?: number;
};
export type TextareaProps = {
  handleInputChange: () => void;
  placeholder?: string;
  type: string;
  value: string | number;
  id: string;
  rows: number;
};

export type AdminBookingsProps = {
  data: Venue[];
};

export type AdminVenuesProps = {
  data: Venue[];
};
