import React from "react";
import "./App.css";
import homes from "./data";
import Card from "../Card/Card";
import Container from "../Container/Container";

function App() {
  return (
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
  );
}

export default App;
