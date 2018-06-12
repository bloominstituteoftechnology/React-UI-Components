import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className="button">
      <div>{props.text}</div>
    </button>
  );
};

export default NumberButton;