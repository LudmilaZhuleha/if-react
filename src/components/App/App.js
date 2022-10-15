import React, {useEffect, useState} from "react";
import "./App.css";
import Container from "../Container/Container";
import MainPage from "../MainPage/MainPage";
import Icon from "../Icon/Icon";
import HeaderNav from "../HeaderNav/HeaderNav";
import Signout from "../Signout/Signout";
import Input from "../Input/Input";
import Button from "../Button/Button";
import GetHomes from "../GetHomes/GetHomes";
import AvailableHomes from "../AvailableHomes/AvailableHomes";
import DatePick from "../DatePicker/DatePicker";
import ModalConditionForm from "../ModalConditionForm/ModalConditionForm";
import Footer from "../Footer/Footer";
import {searchHotelRequest, whiteColor, yellowColor} from "../../constants";
import {useSelector, useDispatch} from "react-redux";
import {submitValue} from "../../store/actions";
import {fetchAvailableHotels} from "../../store/asyncActions";

function App() {
  const [value, setValue] = useState("");
  const [availableIsOpen, setAvailableIsOpen] = useState(false);
  const [isConditionsOpen, setIsConditionsOpen] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [accountColor, setAccountColor] = useState(whiteColor);

  const adultsNumber = useSelector(state => state.conditionsReducer.adults);
  const childrenNumber = useSelector(state => state.conditionsReducer.children);
  const roomsNumber = useSelector(state => state.conditionsReducer.rooms);

  const search = useSelector((state) => state.searchValueReducer.search);
  const adults = useSelector((state) => state.conditionsReducer.adults);
  const rooms = useSelector((state) => state.conditionsReducer.rooms);
  const ages = useSelector((state)=>state.conditionsReducer.ages).join(',');
  const dateStart = useSelector(state => state.conditionsReducer.dateStart);
  const dateEnd = useSelector(state => state.conditionsReducer.dateEnd);
  const fetchAvailableUrl =
  `${searchHotelRequest}${search}&dateFrom=${dateStart}&dateTo=${dateEnd}&adults=${adults}&children=${ages}&rooms=${rooms}`;

  const openConditionsModal = () => {
    setIsConditionsOpen(!isConditionsOpen);
  };
  useEffect(()=>{
    console.log('modal', isConditionsOpen)
  }, [isConditionsOpen])

  const dispatch = useDispatch();

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const submitSearch = (value)=>{
    dispatch(submitValue(value));
  }
  const fetchAvailable =()=>{
    return function(dispatch){
      fetch(fetchAvailableUrl)
        .then(response=> response.json())
        .then(json=>dispatch(fetchAvailableHotels(json)))
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    submitSearch(value);
    fetchAvailable();
    setAvailableIsOpen(true);
  };
  const handleSignout = () =>{
    setOpenSignOut(true);
    setAccountColor(yellowColor);
  }
  return (
    <>
      <MainPage>
        <header className="main-header" style={{position: 'relative'}}>
          <Icon className="header-logo" id="logo" width="205" height="40" />
          <HeaderNav
            nightBtn={<Icon className="night-icon" id="night" />}
            accountBtn={<Icon className="account-icon" style={{color: accountColor}} id="account" onClick={handleSignout} />}
          />
          {openSignOut && (<Signout />)}
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
                  <DatePick id="date_start"/>
                  <label htmlFor="check-in" className="label-date-1">
                    Check-In
                  </label>
                </Input>
                <Input className="input-date-wrap-2">
                  <DatePick id="date_end" />
                  <label htmlFor="check-out" className="label-date-2">
                    Check-Out
                  </label>
                </Input>
              </div>
              <Input
                className="input-conditions"
                onClick={openConditionsModal}
              />
              <label htmlFor="conditions" className="label-conditions">
               Adults {adultsNumber} - Children {childrenNumber} - Rooms {roomsNumber}
              </label>
              <Button
                type="text"
                className="button-lg"
                title="Search"
                onClick={handleClick}
              />
            </div>
            {isConditionsOpen && (
              <ModalConditionForm>
              </ModalConditionForm>
            )}
          </form>
        </div>
      </MainPage>
      {availableIsOpen && (
        <Container title="Available hotels">
          <AvailableHomes
            // value={value}
            // onChange={(value) => {
            //   setValue(value);
            // }}
          />
        </Container>
      )}
      <Container title="Homes Guests Love">
        <GetHomes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
