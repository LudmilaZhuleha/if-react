import React, {useState, useEffect} from 'react';
import Card from "../Card/Card";
import './GetHomes.css';

const GetHomes = () => {
  const homesUrl = 'https://fe-student-api.herokuapp.com/api/hotels/popular';
  const[homes, setHomes]= useState([]);


  useEffect(()=>{
    const fetchHomes = async(url)=>{
        const response = await fetch(url)
        const data = await response.json()
        setHomes(data)
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