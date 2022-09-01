import React from 'react';
import './Button.css';

const Button = ({title, ...props}) => {

  return (
    <button {...props}>
      {title}
    </button>
  );
};
export default Button;