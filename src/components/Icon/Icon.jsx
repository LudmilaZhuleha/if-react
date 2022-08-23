import React from 'react';

const Icon = ({id, ...props}) => {
  return (
    <svg {...props}>
      <use href={`../../assets/svg-sprites.svg#${id}`} />
    </svg>
  );
};
export default Icon;