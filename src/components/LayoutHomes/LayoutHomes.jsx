import React from 'react';
import { Outlet } from 'react-router-dom';
import Icon from "../Icon/Icon";
import HeaderNav from "../HeaderNav/HeaderNav";
import Footer from "../Footer/Footer";
import './LayoutHomes.css';

const LayoutHomes = () => {
  return (
    <div style={{backgroundImage: 'linear-gradient(#00073B, #10367C 60%)'}}>
      <header className="main-header">
        <Icon className="header-logo" id="logo" width="205" height="40" />
        <HeaderNav
          nightBtn={<Icon className="night-icon" id="night" />}
          accountBtn={<Icon className="account-icon" id="account" />}
        />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};
export default LayoutHomes;