import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <div className="footer__info-item">
          <p className="footer__text footer__text--big">Contat Us</p>
          <div className="footer__info-div">
            <FaLocationArrow color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">Markkinakatu 23 b 00700 Helsinki</p>
          </div>
          <div className="footer__info-div">
            <FaPhoneAlt color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">+358 00 160 0500</p>
          </div>
          <div className="footer__info-div">
            <FaEnvelope color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">info@companyname.fi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
