import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./GetHomes.css";
import { homesUrl } from "../../constants";

const GetHomes = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setHomes(data);
    };
    fetchHomes(homesUrl);
  }, []);

  return (
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
  );
};
export default GetHomes;
