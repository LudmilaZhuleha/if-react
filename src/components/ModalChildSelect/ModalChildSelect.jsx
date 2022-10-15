import React, { useState } from "react";
import "./ModalChildSelect.css";

const ModalChildSelect = ({ children }) => {
  return (
    <div className="modal-list-info">
      <p className="modal-list-title">
        What is the age of the child you are travelling with?
      </p>
      {children}
    </div>
  );
};
export default ModalChildSelect;
