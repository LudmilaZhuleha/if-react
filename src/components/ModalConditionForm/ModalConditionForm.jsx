import React from 'react';
import './ModalConditionForm.css';

const ModalConditionForm = ({children}) => {
  return (
    <div className="main-form-modal">
      <ul className="modal-list">
        {children}
      </ul>
    </div>
  );
};
export default ModalConditionForm;