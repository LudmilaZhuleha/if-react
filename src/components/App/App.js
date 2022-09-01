import React, {useState} from "react";
import "./App.css";
import homes from "./data";
import Card from "../Card/Card";
import Container from "../Container/Container";
import MainPage from "../MainPage/MainPage";
import Icon from "../Icon/Icon";
import HeaderNav from "../HeaderNav/HeaderNav";
import Input from "../Input/Input";
import Button from "../Button/Button";

function App() {
  const[value, setValue] = useState('');
  const[destination, setDestination] = useState([]);
  const[AvailableIsOpen, setAvailableIsOpen] = useState(false);

  const handleValue =(e)=>{
    setValue(e.target.value)
  }
  const searchMatches = (arr, str) => {
    const newArr = [];
    arr.forEach((item) => {
      const hotelItem = Object.values(item).join('').toLowerCase();
      if (hotelItem.includes(str)) newArr.push(item);
    })
    return newArr;
  }
  const handleClick =(e)=>{
    e.preventDefault();
    setAvailableIsOpen(true);
    setDestination(searchMatches(homes, value))
    setValue('');
  }
  return (
    <>
      <MainPage>
        <header className="main-header">
          <Icon className="header-logo" id="logo" width="205" height="40"/>
          <HeaderNav nightBtn={<Icon className="night-icon" id="night" />} accountBtn={<Icon className="account-icon" id="account" />}/>
        </header>
        <h1 className="main-header-title">Discover stays to live, work or just relax</h1>
        <div className="main-search-container">
          <form action="" method="POST">
            <div className="main-search-form">
              <Input className="input-place-wrap">
                <input onChange={handleValue} className="input-place" type="text" name="place" id="place" value={value}/>
                <label htmlFor="place" className="label-place">Your destination or hotel name</label>
              </Input>
              <div className="input-date-wrap">
                <Input className="input-date-wrap-1">
                  <input className="input-date" type="text" id="check-in"/>
                  <label htmlFor="check-in" className="label-date-1">Check-In</label>
                </Input>
                <Input className="input-date-wrap-2">
                  <input className="input-date" type="text" id="check-out"/>
                  <label htmlFor="check-out" className="label-date-2">Check-Out</label>
                </Input>
              </div>
              <input type="text" className="input-conditions" id="conditions"/>
              <label htmlFor="conditions" className="label-conditions">2 Adults &#8212; 0 Children &#8212; 1 Room</label>
              <Button className="button-lg" title="Search" onClick={handleClick}/>
            </div>
          </form>
        </div>
      </MainPage>
      {AvailableIsOpen && <Container title="Available hotels">
        <div className="cards">
          {destination.length > 0 ? destination.map((home) => {
            return (
              <Card
                imageUrl={home.imageUrl}
                name={home.name}
                city={home.city}
                country={home.country}
                key={home.id}
              />
            );
          }) : (<p>{value} - not found</p>)}
        </div>
      </Container>}
      <Container title="Homes Guests Love">
        <div className="cards">
          {homes.map((home) => {
            return (
              <Card
                imageUrl={home.imageUrl}
                name={home.name}
                city={home.city}
                country={home.country}
                key={home.id}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default App;
