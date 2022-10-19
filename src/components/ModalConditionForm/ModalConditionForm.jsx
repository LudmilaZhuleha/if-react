import React, { useEffect, useState } from "react";
import "./ModalConditionForm.css";
import ModalChildSelect from "../ModalChildSelect/ModalChildSelect";
import Select from "../Select/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementAdults,
  decrementChildren,
  decrementRooms,
  incrementAdults,
  incrementChildren,
  incrementRooms,
} from "../../store/actions";

const ModalConditionForm = () => {
  const [selects, setSelects] = useState([]);

  const adultsNumber = useSelector((state) => state.conditionsReducer.adults);
  const childrenNumber = useSelector(
    (state) => state.conditionsReducer.children
  );
  const roomsNumber = useSelector((state) => state.conditionsReducer.rooms);

  useEffect(() => {
    const createSelectArray = (num) => {
      return Array(num).fill(0);
    };
    setSelects(createSelectArray(childrenNumber));
  }, [childrenNumber]);

  const dispatch = useDispatch();

  const incrementAdultsNum = ()=>{
    if (adultsNumber >= 0 && adultsNumber <= 29)
      return dispatch(incrementAdults());
  };
  const incrementChildrenNum = ()=>{
    if(adultsNumber === 0) {
      alert("Children are not allowed to travel without adults! Please indicate Adults first!");
      return;
    }

    if (childrenNumber >= 0 && childrenNumber <= 9)
      return dispatch(incrementChildren());
  };
  const incrementRoomsNum = ()=>{
    if (roomsNumber >= 0 && roomsNumber <= 29)
      return dispatch(incrementRooms());
  };

  const decrementAdultsNum = ()=>{
    if (adultsNumber >= 1)
      return dispatch(decrementAdults());
  };
  const decrementChildrenNum = ()=>{
    if (childrenNumber >= 1)
      return dispatch(decrementChildren());
  };
  const decrementRoomsNum = ()=>{
    if (roomsNumber >= 1)
      return dispatch(decrementRooms());
  };

  return (
    <div className="main-form-modal">
      <ul className="modal-list">
        <li className="modal-item">
          <h3 className="modal-item-title">Adults</h3>
          <div className="modal-item-counter">
            <button
              type="button"
              className="modal-item-down"
              onClick={() => {
                decrementAdultsNum();
              }}
            >
              -
            </button>
            <span className="modal-item-count">{adultsNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={()=>{
                incrementAdultsNum()}
              }
            >
              +
            </button>
          </div>
        </li>
        <li className="modal-item">
          <h3 className="modal-item-title">Children</h3>
          <div className="modal-item-counter">
            <button
              type="button"
              className="modal-item-down"
              onClick={() => {
                decrementChildrenNum();
              }}
            >
              -
            </button>
            <span className="modal-item-count">{childrenNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={() => {
                incrementChildrenNum();
              }}
            >
              +
            </button>
          </div>
        </li>
        <li className="modal-item">
          <h3 className="modal-item-title">Rooms</h3>
          <div className="modal-item-counter">
            <button
              type="button"
              className="modal-item-down"
              onClick={() => {
                decrementRoomsNum();
              }}
            >
              -
            </button>
            <span className="modal-item-count">{roomsNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={() => {
                incrementRoomsNum();
              }}
            >
              +
            </button>
          </div>
        </li>
      </ul>
      {childrenNumber > 0 ? (
        <ModalChildSelect>
          {selects.map((item, i) => {
            return <Select key={i} />;
          })}
        </ModalChildSelect>
      ) : null}
    </div>
  );
};
export default ModalConditionForm;
