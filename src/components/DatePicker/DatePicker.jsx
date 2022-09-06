import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
  const [startDate, setStartDate] = useState('');
  return (
    <DatePicker

      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
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