import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Button from '../Button/Button';
import Card from "../Card/Card";

const Home = () => {
  const [singleHome, setSingleHome] = useState(null);
  const {id} = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
      fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
        .then(response => response.json())
        .then(data => setSingleHome(data))
    },   [id]
  )

  return (
    <div>
      {singleHome && (
        <>
          <Card
            imageUrl={singleHome.imageUrl}
            name={singleHome.name}
            city={singleHome.city}
            country={singleHome.country}
          />
          <Button className="button-lg" title="Back Home" onClick={()=>navigate('/')} />
        </>
      )}
    </div>
  );
};
export default Home;