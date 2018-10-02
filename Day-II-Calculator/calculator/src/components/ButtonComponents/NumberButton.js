import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div>
      <button className={`button-style ${props.numberStyle}`}>{props.name}</button>
    </div>
  );
};

export default NumberButton;
