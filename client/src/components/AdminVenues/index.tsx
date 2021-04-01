import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminVenuesProps, Venue } from '../../types';
import { FaArrowLeft, FaArrowRight, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

import './AdminVenues.scss';
import Button from '../Button';

const AdminVenues = ({ data }: AdminVenuesProps) => {
  const [venueSelection, setVenueSelection] = useState('Longue-1');
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [venue, setVenue] = useState<Venue>();
  const history = useHistory();

  useEffect(() => {
    const venueData = data.find((v) => v.venueName === venueSelection);
    setVenue(venueData);
  }, [venueSelection]);

  const handleRightArrow = () => {
    venue && setCurrentImage(currentImage === venue.photos.length - 1 ? 0 : currentImage + 1);
  };
  const handleLeftArrow = () => {
    venue && setCurrentImage(currentImage === 0 ? venue.photos.length - 1 : currentImage - 1);
  };

  const editVenue = () => {
    history.push(`/admin/venueEdit/${venue?.id}`);
  };

  return (
    <div className="admin-venues">
      <select
        className="admin-venues__select"
        onChange={(e: any): void => setVenueSelection(e.target.value)}
        value={venueSelection}
      >
        {data.map((v, index) => (
          <option key={index}>{v.venueName}</option>
        ))}
      </select>
      {venue && (
        <div className="admin-venues__main">
          <div className="admin-venues__image-div">
            <img src={venue.photos[currentImage]} className="admin-venues__image" alt="test" />
            <div className="admin-venues__arrows">
              <FaArrowLeft
                onClick={handleLeftArrow}
                className="admin-venues__icon admin-venues__icon--arrow"
                style={{ cursor: 'pointer' }}
                color="rgba(255, 255, 255, 0.808)"
                size={30}
              />
              <FaArrowRight
                onClick={handleRightArrow}
                className="admin-venues__icon admin-venues__icon--arrow"
                style={{ cursor: 'pointer' }}
                color="rgba(255, 255, 255, 0.808)"
                size={30}
              />
            </div>
            <div className="admin-venues__circle-div">
              {venue.photos.map((photo: any, index) => (
                <div
                  key={index}
                  className={
                    index === currentImage
                      ? 'admin-venues__circle admin-venues__circle--selected'
                      : 'admin-venues__circle'
                  }
                ></div>
              ))}
            </div>
          </div>

          <div className="admin-venues__info-div">
            <h1 className="admin-venues__venue-name">{venue.venueName}</h1>
            <div className="admin-venues__info-text-div">
              <FaMapMarkerAlt
                className="admin-venues__icon admin-venues__icon--arrow"
                color="#f2f2f2"
                size={20}
              />
              <p className="admin-venues__info-text">{venue.address}</p>
              <FaUsers
                className="admin-venues__icon admin-venues__icon--arrow"
                color="#f2f2f2"
                size={20}
              />
              <p className="admin-venues__info-text">{venue.people}</p>
            </div>
            <p className="admin-venues__desc">{venue.description}</p>
            <p className="admin-venues__desc-title">features</p>
            <div className="admin-venues__features">
              {venue.features.map((f) => (
                <p className="admin-venues__feature">{f}</p>
              ))}
            </div>
            <div className="admin-venues__bottom-div">
              <div className="admin-venues__price-div">{venue.price}€/h</div>
              <div className="admin-venues__button-div">
                <Button modifier="small" handleClick={editVenue} text="Edit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVenues;
