import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { searchHotelRequest } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AvailableHomes = () => {
  const [available, setAvailable] = useState([]);
  const search = useSelector((state) => state.searchValueReducer.search);

  useEffect(() => {
    const availableFetch = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setAvailable(data);
    };
    availableFetch(`${searchHotelRequest}${search}`);
    // onChange("");
  }, []);

  return (
    <div className="cards">
      {available.length > 0 ? (
        available.map((item) => {
          return (
            <Link key={item.id} to={`/${item.id}`}>
              <Card
                imageUrl={item.imageUrl}
                name={item.name}
                city={item.city}
                country={item.country}
              />
            </Link>
          );
        })
      ) : (
        <p>{search} - not found</p>
      )}
    </div>
  );
};
export default AvailableHomes;
