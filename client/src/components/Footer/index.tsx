import React from 'react';
import {
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGlobe
} from 'react-icons/fa';

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

        <div className="footer__vl"></div>

        <div className="footer__info-item">
          <p className="footer__text footer__text--big">Developer Info</p>
          <div className="footer__info-div">
            <FaLinkedin color="#fda084" size={20} className="footer_icon" />
            <a
              className="footer__a-tag"
              href="https://www.linkedin.com/in/chiranjibi-chapagain-4aa57595/"
              target="_blank"
            >
              <p className="footer__text footer__text--small">LinkedIn</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaGlobe color="#fda084" size={20} className="footer_icon" />
            <a
              className="footer__a-tag"
              href="https://chiranjibichapagain-portfolio.netlify.app"
              target="_blank"
            >
              <p className="footer__text footer__text--small">Portfolio Website</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaGithub color="#fda084" size={20} className="footer_icon" />
            <a
              className="footer__a-tag"
              href="https://github.com/Chiranjibichapagain"
              target="_blank"
            >
              <p className="footer__text footer__text--small">GitHub Profile</p>
            </a>
          </div>
          <div className="footer__info-div">
            <FaPhoneAlt color="#fda084" size={20} className="footer_icon" />
            <p className="footer__text footer__text--small">+358451405566</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
