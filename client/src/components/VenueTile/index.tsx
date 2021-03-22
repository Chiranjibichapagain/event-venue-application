import React, { useState } from 'react';

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaRulerHorizontal,
  FaUsers,
  FaMapMarkerAlt
} from 'react-icons/fa';

import testImg from '../../Assets/data_photos/col-legi-de-farmaceutics-de-barcelona-yjydNkTYy4U-unsplash.jpg';

import './VenueTile.scss';

const VenueTile = () => {
  return (
    <div className="tile">
      <div className="tile__image-div">
        <img src={testImg} className="tile__image" alt="test" />
        <div className="tile__top-box">
          <p className="tile__price">120€</p>
          <FaExternalLinkAlt />
        </div>
        <div className="tile__arrows">
          <FaArrowLeft color="white" size={40} />
          <FaArrowRight color="white" size={40} />
        </div>
      </div>
      <div className="tile__info-div">
        <p className="tile__text tile__text-big">Longue 1</p>
        <div className="tile__info-item">
          <div className="tile__info">
            <FaRulerHorizontal />
            <p className="tile__text tile__text-small">120 msq</p>
          </div>
          <div className="tile__info">
            <FaUsers />
            <p className="tile__text tile__text-small">120</p>
          </div>
        </div>
        <div className="tile__info-item">
          <FaMapMarkerAlt />
          <p className="tile__text tile__text-small">Markkinatie 20 S20 00700 Helsinki</p>
        </div>
      </div>
    </div>
  );
};

export default VenueTile;
