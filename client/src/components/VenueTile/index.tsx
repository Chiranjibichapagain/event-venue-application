import React, { useState } from 'react';

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaRulerHorizontal,
  FaUsers,
  FaMapMarkerAlt
} from 'react-icons/fa';

import { VenueProps } from '../../types';

import './VenueTile.scss';

const VenueTile = ({ data }: VenueProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleRightArrow = () => {
    setCurrentImage(currentImage === data.photos.length - 1 ? 0 : currentImage + 1);
  };
  const handleLeftArrow = () => {
    setCurrentImage(currentImage === 0 ? data.photos.length - 1 : currentImage - 1);
  };

  return (
    <div className="tile">
      <div className="tile__image-div">
        <img src={data.photos[currentImage]} className="tile__image" alt="test" />
        <div className="tile__top-box">
          <p className="tile__price">{data.price}€/h</p>
          <FaExternalLinkAlt
            style={{ cursor: 'pointer' }}
            className="tile__icon tile__icon--link"
            size={20}
          />
        </div>

        <div className="tile__arrows">
          <FaArrowLeft
            onClick={handleLeftArrow}
            className="tile__icon tile__icon--arrow"
            style={{ cursor: 'pointer' }}
            color="rgba(255, 255, 255, 0.808)"
            size={20}
          />
          <FaArrowRight
            onClick={handleRightArrow}
            className="tile__icon tile__icon--arrow"
            style={{ cursor: 'pointer' }}
            color="rgba(255, 255, 255, 0.808)"
            size={20}
          />
        </div>
        <div className="tile__circle-div">
          {data.photos.map((photo: any, index) => (
            <div
              key={index}
              className={
                index === currentImage ? 'tile__circle tile__circle--selected' : 'tile__circle'
              }
            ></div>
          ))}
        </div>
      </div>
      <div className="tile__info-div">
        <p className="tile__text tile__text--big">{data.venueName}</p>
        <div className="tile__info-item">
          <div className="tile__info">
            <FaRulerHorizontal size={20} color="white" />
            <p className="tile__text tile__text--small">{data.area}</p>
          </div>
          <div className="tile__info">
            <FaUsers size={20} color="white" />
            <p className="tile__text tile__text--small">{data.people}</p>
          </div>
        </div>
        <div className="tile__info-item tile__info-item--address">
          <FaMapMarkerAlt size={20} color="white" />
          <p className="tile__text tile__text--small">{data.address}</p>
        </div>
      </div>
    </div>
  );
};

export default VenueTile;
