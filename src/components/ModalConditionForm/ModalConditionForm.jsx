import React, { useEffect, useState } from "react";
import "./ModalConditionForm.css";
import ModalChildSelect from "../ModalChildSelect/ModalChildSelect";
import Select from "../Select/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement_adults,
  decrement_children,
  decrement_rooms,
  increment_adults,
  increment_children,
  increment_rooms,
} from "../../store/actionTypes";

const ModalConditionForm = () => {
  const [selects, setSelects] = useState(null);

  const adultsNumber = useSelector((state) => state.conditionsReducer.adults);
  const childrenNumber = useSelector(
    (state) => state.conditionsReducer.children
  );
  const roomsNumber = useSelector((state) => state.conditionsReducer.rooms);

  const dispatch = useDispatch();

  useEffect(() => {
    const createSelectArray = (num) => {
      return Array(num).fill(0);
    };
    setSelects(createSelectArray(childrenNumber));
  }, [childrenNumber]);

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
                if (adultsNumber >= 1) dispatch({ type: decrement_adults });
              }}
            >
              -
            </button>
            <span className="modal-item-count">{adultsNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={() => {
                if (adultsNumber >= 0 && adultsNumber <= 29)
                  dispatch({ type: increment_adults });
              }}
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
                if (childrenNumber >= 1) dispatch({ type: decrement_children });
              }}
            >
              -
            </button>
            <span className="modal-item-count">{childrenNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={() => {
                if (childrenNumber >= 0 && childrenNumber <= 9)
                  dispatch({ type: increment_children });
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
                if (roomsNumber >= 1) dispatch({ type: decrement_rooms });
              }}
            >
              -
            </button>
            <span className="modal-item-count">{roomsNumber}</span>
            <button
              type="button"
              className="modal-item-up"
              onClick={() => {
                if (roomsNumber >= 0 && roomsNumber <= 29)
                  dispatch({ type: increment_rooms });
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
