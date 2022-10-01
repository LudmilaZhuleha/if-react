import React, {useEffect, useState} from "react";
import "./ModalCondition.css";
import {CONDITION_TYPE} from "../../constants";

const ModalCondition = ({ title, id, handleChildrenValue }) => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if (id === CONDITION_TYPE.children) handleChildrenValue(count);
  },[count]);

  const decreaseCount = () => {
    if (count >= 1) setCount(count - 1);
  };

  const increaseCount = () => {
    if ((id !== CONDITION_TYPE.children) && count >= 0 && count <= 29)
      setCount(count + 1);
    if (id === CONDITION_TYPE.children && count >= 0 && count <= 9) setCount(count + 1);
  };
  return (
    <li className="modal-item" id={id}>
      <h3 className="modal-item-title">{title}</h3>
      <div className="modal-item-counter">
        <button type="button" className="modal-item-down" onClick={decreaseCount}>
          -
        </button>
        <span className="modal-item-count">{count}</span>
        <button type="button" className="modal-item-up" onClick={increaseCount}>
          +
        </button>
      </div>
    </li>
  );
};
export default ModalCondition;
