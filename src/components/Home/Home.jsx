import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Home = () => {
  const [singleHome, setSingleHome] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleHome(data));
  }, [id]);

  return (
    <Container>
      {singleHome && (
        <>
          <div className="home-wrapper">
            <div className="home-card">
              <img
                width="296"
                height="296"
                className="home-card-image"
                src={singleHome.imageUrl}
                alt={singleHome.name}
              />
            </div>
            <div className="reviews-card-description">
              <h3 className="home-image-name">{singleHome.name}</h3>
              <p className="home-image-location">
                {singleHome.city}, {singleHome.country}
              </p>
              <div className="reviews-card_rating">9,4</div>
              <p className="reviews-card_place">Excellent</p>
              <p className="reviews-card_ratinginfo">1324 reviews</p>
              <Button
                title="Check accommodation"
                className="home-card-button"
              />
            </div>
          </div>
          <Button
            className="button-lg"
            title="Back Home"
            onClick={() => navigate("/")}
          />
        </>
      )}
    </Container>
  );
};
export default Home;
