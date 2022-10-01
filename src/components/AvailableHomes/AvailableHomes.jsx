import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { searchHotelRequest } from "../../constants";

const AvailableHomes = ({ value, onChange }) => {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    const availableFetch = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setAvailable(data);
    };
    availableFetch(`${searchHotelRequest}${value}`);
    onChange("");
  }, []);

  return (
    <div className="cards">
      {available.length > 0 ? (
        available.map((home) => {
          return (
            <Card
              imageUrl={home.imageUrl}
              name={home.name}
              city={home.city}
              country={home.country}
              key={home.id}
            />
          );
        })
      ) : (
        <p>{value} - not found</p>
      )}
    </div>
  );
};
export default AvailableHomes;
