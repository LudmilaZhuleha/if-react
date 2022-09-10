import React from 'react';
import Icon from '../Icon/Icon';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <Icon id="footer-logo" width="98" height="19" />
        </div>
        <div className="footer-container">
          <ul className="footer-list">
            <li className="footer-item footer-list-title">About</li>
            <li className="footer-item">How Triphouse works</li>
            <li className="footer-item">Careers</li>
            <li className="footer-item">Privacy</li>
            <li className="footer-item">Terms</li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item footer-list-title">Property types</li>
            <li className="footer-item">Guest houses</li>
            <li className="footer-item">Hotels</li>
            <li className="footer-item">Apartments</li>
            <li className="footer-item">Villas</li>
            <li className="footer-item">Holiday homes</li>
            <li className="footer-item">Hostels</li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item footer-list-title">Support</li>
            <li className="footer-item">Contact Customer Service</li>
            <li className="footer-item">FAQ</li>
          </ul>
        </div>
        <p className="footer-copyright">
          &copy; 2020 Triphouse, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;