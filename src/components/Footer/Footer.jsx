import React from 'react';
import Icon from '../Icon/Icon';
import './Footer.css'

const Footer = () => {
  const descriptions =['How Triphouse works','Careers','Privacy','Terms'];
  const homesTypes =['Guest houses','Hotels','Apartments','Villas','Holiday homes','Hostels'];

  const descriptionList = descriptions.map((item, i)=>{
    return (<li className="footer-item" key={i}>{item}</li>)});

  const homesTypesList = homesTypes.map((item, i)=>{
    return (<li className="footer-item" key={i}>{item}</li>)});

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <Icon id="footer-logo" width="98" height="19" />
        </div>
        <div className="footer-container">
          <ul className="footer-list">
            <li className="footer-item footer-list-title">About</li>
            {descriptionList}
          </ul>
          <ul className="footer-list">
            <li className="footer-item footer-list-title">Property types</li>
            {homesTypesList}
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