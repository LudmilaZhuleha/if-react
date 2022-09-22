import React from "react";
import PropTypes from "prop-types";
import "./Container.css";

function Container({ title, children }) {
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Container;
