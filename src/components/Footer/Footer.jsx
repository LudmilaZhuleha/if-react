import React from "react";
import Icon from "../Icon/Icon";
import List from "../List/List";
import "./Footer.css";
import { homesTypes, descriptions } from "../../constants";

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
            <List className="footer-item" list={descriptions} />
          </ul>
          <ul className="footer-list">
            <li className="footer-item footer-list-title">Property types</li>
            <List className="footer-item" list={homesTypes} />
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
