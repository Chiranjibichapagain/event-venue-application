import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { FaArrowLeft, FaArrowRight, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../../components/Button';
import { getOneVenue } from '../../services/venueServices';
import { Venue } from '../../types';

import './VenuePage.scss';

const VenuePage = ({ match }) => {
  const history = useHistory();
  const [venue, setVenue] = useState<Venue>();
  const [currentImage, setCurrentImage] = useState<number>(0);

  const id = match.params.venueId;
  const fetchVenue = () => {
    getOneVenue(id).then((res) => {
      setVenue(res.data);
    });
  };

  useEffect(() => {
    fetchVenue();
  }, [id]);

  const handleRightArrow = () => {
    venue && setCurrentImage(currentImage === venue.photos.length - 1 ? 0 : currentImage + 1);
  };
  const handleLeftArrow = () => {
    venue && setCurrentImage(currentImage === 0 ? venue.photos.length - 1 : currentImage - 1);
  };

  const toBooking = () => {
    history.push(`/venue/${venue?.id}/booking`);
  };

  return (
    <div className="venue-main">
      {venue && (
        <div className="venue">
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
                    index === currentImage
                      ? 'venue__circle venue__circle--selected'
                      : 'venue__circle'
                  }
                ></div>
              ))}
            </div>
          </div>

          <div className="venue__info-div">
            <h1 className="venue__venue-name">{venue.venueName}</h1>
            <div className="venue__info-text-div">
              <FaMapMarkerAlt
                className="venue__icon venue__icon--arrow"
                color="#f2f2f2"
                size={20}
              />
              <p className="venue__info-text">{venue.address}</p>
              <FaUsers className="venue__icon venue__icon--arrow" color="#f2f2f2" size={20} />
              <p className="venue__info-text">{venue.people}</p>
            </div>
            <p className="venue__desc">{venue.description}</p>
            <p className="venue__desc-title">features</p>
            <div className="venue__features">
              {venue.features.map((f) => (
                <p className="venue__feature">{f}</p>
              ))}
            </div>
            <div className="venue__bottom-div">
              <div className="venue__price-div">{venue.price}€/h</div>
              <div className="venue__botton-div">
                {' '}
                <Button text="Reserve" modifier="small" handleClick={toBooking} />{' '}
              </div>
            </div>
          </div>
        </div>
      )}
      {!venue && <ReactLoading type={'bars'} color={'green'} height={300} width={175} />}
    </div>
  );
};

export default VenuePage;
