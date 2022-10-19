import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./Signout.css";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions";

const Signout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(logout(false));
        navigate("/login");
      }}
      type="text"
      className="signout-btn"
    >
      <Icon id="signout" width="20" height="18" />
      <span style={{ marginLeft: "16px" }}>Sign out</span>
    </button>
  );
};
export default Signout;
