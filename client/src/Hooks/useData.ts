import React, { useState, useEffect } from 'react';
import { getAllVenues, getOneVenue } from '../services/venueServices';
import { Venue } from '../types';

export const useAllVenues = () => {
  const [venues, setVenues] = useState<Venue[]>([]);

  const fetchData = () => {
    getAllVenues().then((res) => {
      setVenues(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [venues];
};

export const useOneVenue = (id) => {
  const [venue, setVenue] = useState<Venue>();

  const fetchData = () => {
    getOneVenue(id).then((res) => {
      setVenue(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (venue) {
    return [venue];
  } else {
    return [];
  }
};
