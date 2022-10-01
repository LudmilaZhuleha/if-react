import React, {useEffect, useState} from "react";
import "./ModalConditionForm.css";
import ModalChildSelect from "../ModalChildSelect/ModalChildSelect";
import Select from "../Select/Select";
import ModalCondition from "../ModalCondition/ModalCondition";
import {CONDITION_TYPE} from "../../constants";

const ModalConditionForm = () => {
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [selects, setSelects] = useState(null);

  useEffect(()=>{
      const createSelectArray = (num)=>{
      return Array(num).fill(0);
    };
      setSelects(createSelectArray(childrenNumber));

    console.log('selects', selects);
  },[childrenNumber]);
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
          {
            selects.map((item, i) => {return(<Select key={i} />)})
          }
        </ModalChildSelect>) : null}

    </div>
  );
};
export default ModalConditionForm;
