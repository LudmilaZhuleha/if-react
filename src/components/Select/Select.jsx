import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {childrenAges} from "../../store/actions";

const Select = () => {
  const [select, setSelect] = useState("");
  const ages = [
    // "0 years old",
    // "1 years old",
    // "2 years old",
    // "3 years old",
    // "4 years old",
    // "5 years old",
    // "6 years old",
    // "7 years old",
    // "8 years old",
    // "9 years old",
    // "10 years old",
    // "11 years old",
    1,2,3,4
  ];
  const options = ages.map((age, i) => <option key={i}>{age}</option>);
  const dispatch = useDispatch();

  const addChildrenAges = (select)=>{
    dispatch(childrenAges(select))
  }
  const selectChange = (e) =>{
    setSelect(e.target.value);
    let newSelect = e.target.value;
    addChildrenAges(newSelect);
  }

  return (
    <select
      value={select}
      onChange={selectChange}
      className="modal-age-select"
    >
      {options}
    </select>
  );
};
export default Select;
