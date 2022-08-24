import React from 'react';
// import '../../assets/svg-sprites.svg';

const Icon = ({id, ...props}) => {
  return (
    <svg {...props}>
      <use href={`../../assets/svg-sprites.svg#${id}`} />
    </svg>
  );
};
export default Icon;