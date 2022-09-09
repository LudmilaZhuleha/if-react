import React from "react";
import "./ModalConditionForm.css";
import ModalChildSelect from "../ModalChildSelect/ModalChildSelect";
import Select from "../Select/Select";

const ModalConditionForm = ({ children, condition }) => {
  return (
    <div className="main-form-modal">
      <ul className="modal-list">{children}</ul>
      {{ condition } && (
        <ModalChildSelect>
          <Select />
        </ModalChildSelect>)}
    </div>
  );
};
export default ModalConditionForm;
