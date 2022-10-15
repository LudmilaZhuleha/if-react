import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import {dateFrom, dateTo} from "../../store/actions";

const DatePick = ({id}) => {
  const [startDate, setStartDate] = useState("");
  const dispatch = useDispatch();
  const getDate =(date)=>{
    if(id==="date_start")
      dispatch(dateFrom(date));
    if(id==="date_end")
      dispatch(dateTo(date));
  }
const changeDate =(date)=>{
  setStartDate(date);
  const newDate = date;
  getDate(newDate);
}

  return (
    <DatePicker
      id={id}
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      // onChange={(date) => setStartDate(date)}
      onChange={changeDate}
      popperClassName="some-custom-class"
      popperPlacement="top-end"
      popperModifiers={[
        {
          name: "offset",
          options: {
            offset: [5, 10],
          },
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport",
            tether: false,
            altAxis: true,
          },
        },
      ]}
    />
  );
};
export default DatePick;
