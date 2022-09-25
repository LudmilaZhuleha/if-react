import React from 'react';
import {useNavigate} from "react-router-dom";
import Icon from "../Icon/Icon";
import './Signout.css';

const Signout = () => {
  const navigate = useNavigate();
  return (
    <button onClick={()=>{navigate('/')}} type="text" className="signout-btn">
      <Icon id="signout" width="20" height="18" />
      <span style={{marginLeft: '16px'}}>Sign out</span>
    </button>
  );
};
export default Signout;