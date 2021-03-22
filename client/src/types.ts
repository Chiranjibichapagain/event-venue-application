export type UserData = {
  email: string;
  familyName: string;
  givenName: string;
  googleId: string;
  imageUrl: string;
  name: string;
};

export type ButtonProps = {
  text: string;
  modifier?: string;
  handleClick: (() => void) | ((id: any) => void);
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
};

export type VenueProps = {
  data: Venue;
};
