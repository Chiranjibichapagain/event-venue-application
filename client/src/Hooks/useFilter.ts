import React, { useState, useEffect } from 'react';

import { Venue } from '../types';
import { data } from '../utils/dummydata';

export const useFilter = (price, size) => {
  const [venue, setVenue] = useState<Venue[]>([]);

  console.log(
    'test--',
    venue.map((v) => v.price)
  );

  useEffect(() => {
    handleFilter();
  }, [venue]);

  const handleFilter = () => {
    const priceFilter = () => {
      if (!price) {
        return data;
      } else if (price === 'cheap') {
        return data.sort((a, b) => a.price - b.price);
      } else {
        return data.sort((a, b) => b.price - a.price);
      }
    };
    const sizeFilter = () => {
      if (!size) {
        return data;
      } else if (size === 'small') {
        return data.sort((a, b) => a.people - b.people);
      } else {
        return data.sort((a, b) => b.people - a.people);
      }
    };
    const filteredData = price ? priceFilter() : sizeFilter();
    console.log(
      'trrrr--',
      filteredData.map((d) => d.price)
    );

    // setVenue(filteredData);
  };

  return [venue];
};
