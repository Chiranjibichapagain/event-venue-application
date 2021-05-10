export type RoomInfo = {
  name: string;
  email: string;
};

export type NewMessage = {
  message: string;
  name: string;
  type: 'organize' | 'guest';
  roomId: string;
};

export type Date = {
  day: number;
  month: number;
  year: number;
};

export type ClientInfo = {
  name: string;
  email: string;
  phone: string;
  message: String;
};
