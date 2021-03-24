import React, { useState } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Venue } from '../../types';
import { data } from '../../utils/dummydata';

import './VenuePage.scss';
const VenuePage = ({ match }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const id = match.params.venueId;
  const venue = data && data.find((item) => item.id === parseInt(id));

  const handleRightArrow = () => {
    venue && setCurrentImage(currentImage === venue.photos.length - 1 ? 0 : currentImage + 1);
  };
  const handleLeftArrow = () => {
    venue && setCurrentImage(currentImage === 0 ? venue.photos.length - 1 : currentImage - 1);
  };
  return (
    <div className="venue">
      {venue && (
        <div className="venue__image-div">
          <img src={venue.photos[currentImage]} className="venue__image" alt="test" />
          <div className="venue__arrows">
            <FaArrowLeft
              onClick={handleLeftArrow}
              className="venue__icon venue__icon--arrow"
              style={{ cursor: 'pointer' }}
              color="rgba(255, 255, 255, 0.808)"
              size={30}
            />
            <FaArrowRight
              onClick={handleRightArrow}
              className="venue__icon venue__icon--arrow"
              style={{ cursor: 'pointer' }}
              color="rgba(255, 255, 255, 0.808)"
              size={30}
            />
          </div>
          <div className="venue__circle-div">
            {venue.photos.map((photo: any, index) => (
              <div
                key={index}
                className={
                  index === currentImage ? 'venue__circle venue__circle--selected' : 'venue__circle'
                }
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VenuePage;
