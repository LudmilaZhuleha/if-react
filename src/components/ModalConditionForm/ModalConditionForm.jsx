import React, {useEffect, useState} from "react";
import "./ModalConditionForm.css";
import ModalChildSelect from "../ModalChildSelect/ModalChildSelect";
import Select from "../Select/Select";
import ModalCondition from "../ModalCondition/ModalCondition";
import {CONDITION_TYPE} from "../../constants";



const ModalConditionForm = () => {
  const [childrenNumber, setChildrenNumber] = useState(0);

  useEffect(()=>{
    console.log('childrenNumber', childrenNumber);
    // create func creating array Array(count)
  },[childrenNumber])
  return (
    <div className="main-form-modal">
      <ul className="modal-list">
        <ModalCondition title="Adults" id={CONDITION_TYPE.adults}/>
        <ModalCondition
          title="Children"
          id={CONDITION_TYPE.children}
          handleChildrenValue={(value) => {setChildrenNumber(value)}}
        />
        <ModalCondition title="Rooms" id={CONDITION_TYPE.rooms}/>
      </ul>
      {childrenNumber > 0 ? (
        <ModalChildSelect>
          <Select/>
        </ModalChildSelect>) : null}

    </div>
  );
};
export default ModalConditionForm;
