import React from "react";
import "./HeaderNav.css";

const HeaderNav = ({ nightBtn, accountBtn }) => {
  return (
    <ul className="header-list">
      <li className="header-items">
        <a href="#" className="header-items-link">
          Stays
        </a>
      </li>
      <li className="header-items">
        <a href="#" className="header-items-link">
          Attractions
        </a>
      </li>
      <li className="header-items">{nightBtn}</li>
      <li className="header-items">{accountBtn}</li>
    </ul>
  );
};
export default HeaderNav;
