import React, { useState } from "react";
import "./App.css";
import Container from "../Container/Container";
import MainPage from "../MainPage/MainPage";
import Icon from "../Icon/Icon";
import HeaderNav from "../HeaderNav/HeaderNav";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GetHomes from "../GetHomes/GetHomes";
import AvailableHomes from "../AvailableHomes/AvailableHomes";
import DatePick from "../DatePicker/DatePicker";

function App() {
  const [value, setValue] = useState("");
  const [AvailableIsOpen, setAvailableIsOpen] = useState(false);
  // const [isDatePickerOn, setDatePickerOn] = useState(true);
  //
  // const openCalendar = () =>{
  //   setDatePickerOn(true)
  // }
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAvailableIsOpen(true);
  };
  return (
    <>
      <MainPage>
        <header className="main-header">
          <Icon className="header-logo" id="logo" width="205" height="40" />
          <HeaderNav
            nightBtn={<Icon className="night-icon" id="night" />}
            accountBtn={<Icon className="account-icon" id="account" />}
          />
        </header>
        <h1 className="main-header-title">
          Discover stays to live, work or just relax
        </h1>
        <div className="main-search-container">
          <form action="" method="POST">
            <div className="main-search-form">
              <Input className="input-place-wrap">
                <input
                  onChange={handleValue}
                  className="input-place"
                  type="text"
                  name="place"
                  id="place"
                  value={value}
                />
                <label htmlFor="place" className="label-place">
                  Your destination or hotel name
                </label>
              </Input>
              <div className="input-date-wrap">
                <Input className="input-date-wrap-1">
                  <DatePick />
                  <label htmlFor="check-in" className="label-date-1">
                    Check-In
                  </label>
                </Input>
                <Input className="input-date-wrap-2">
                  <DatePick />
                  <label htmlFor="check-out" className="label-date-2">
                    Check-Out
                  </label>
                </Input>
              </div>
              <input type="text" className="input-conditions" id="conditions" />
              <label htmlFor="conditions" className="label-conditions">
                2 Adults &#8212; 0 Children &#8212; 1 Room
              </label>
              <Button
                className="button-lg"
                title="Search"
                onClick={handleClick}
              />
            </div>
          </form>
        </div>
      </MainPage>
      {AvailableIsOpen && (
        <Container title="Available hotels">
          <AvailableHomes
            value={value}
            onChange={(value) => {
              setValue(value);
            }}
          />
        </Container>
      )}
      <Container title="Homes Guests Love">
        <GetHomes />
      </Container>
    </>
  );
}

export default App;
