import React from "react";
import "./App.css";
import homes from "./data";
import Card from "../Card/Card";
import Container from "../Container/Container";
import MainPage from "../MainPage/MainPage";

function App() {
  return (
    <>
      <MainPage>
        <header className="main-header">

        </header>
        <h1 className="main-header-title">Discover stays to live, work or just relax</h1>
      </MainPage>
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
