import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import HeaderNav from "../HeaderNav/HeaderNav";
import MainPage from "../MainPage/MainPage";
import Button from "../Button/Button";
import "./Signin.css";
import {useDispatch, useSelector} from "react-redux";
import {login, submitValue} from "../../store/actions";
import {useEffect} from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogged = useSelector(state => state.loginReducer.isLogged);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isLogged) {
      navigate('/');
    }
  }, [isLogged])

  const authorized = () => {
    dispatch(login(true));
  };


  return (
    <MainPage style={{ position: "relative" }}>
      <header className="main-header">
        <Icon className="header-logo" id="logo" width="205" height="40" />
        <HeaderNav
          nightBtn={<Icon className="night-icon" id="night" />}
          accountBtn={<Icon className="account-icon" id="account" />}
        />
      </header>
      <form action="/" className="signin-container">
        <div className="signin-wrapper">
          <h1 className="signin-title">Sign in</h1>
          <div className="signin-wrap-email">
            <label className="signin-label" htmlFor="signin-label-email">
              Email address
            </label>
            <input
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="signin-label-email"
            />
          </div>
          <div className="signin-wrap-pass">
            <label className="signin-label" htmlFor="signin-label-pass">
              Password
            </label>
            <input
              className="signin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="signin-label-pass"
            />
          </div>
          <Button
            onClick={authorized}
            className="signin-btn"
            title="Sign in"
            type="text"
          />
        </div>
      </form>
    </MainPage>
  );
};
export default Signin;
