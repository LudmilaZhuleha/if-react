import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card(data) {
  return (
    <div className="card">
      <img
        width="296"
        height="296"
        className="card-image"
        src={data.imageUrl}
        alt={data.name}
      />
      <h3 className="image-name">{data.name}</h3>
      <p className="image-location">
        {data.city}, {data.country}
      </p>
    </div>
  );
}
Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Card;
