import React, {useState} from 'react';
import './ModalCondition.css';

const ModalCondition = ({title, id}) => {
  const [count, setCount] = useState(0);

  const decreaseCount =(e)=>{
    e.preventDefault();
    if(count>=1) setCount(count-1);
  }
  const increaseCount =(e)=>{
    e.preventDefault();
    if((id==='adults' || id==='rooms') && count>=0 && count<=29) setCount(count+1);
    if(id==='child' && count>=0 && count<=9) setCount(count+1);
  }
  return (
    <li className="modal-item" id={id}>
      <h3 className="modal-item-title">{title}</h3>
      <div className="modal-item-counter">
        <button className="modal-item-down" onClick={decreaseCount}>-</button>
        <span className="modal-item-count">{count}</span>
        <button className="modal-item-up" onClick={increaseCount}>+</button>
      </div>
    </li>
  );
};
export default ModalCondition;