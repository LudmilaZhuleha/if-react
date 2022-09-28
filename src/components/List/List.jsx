import React from "react";

const List = ({ list, className }) => {
  const listItems = list.map((item, i) => (
    <li className={className} key={i}>
      {item}
    </li>
  ));

  return <>{listItems}</>;
};
export default List;
