import React from 'react';
import './Button.css';

const NumberButton = (props) => {

  return (
    <div className="numberButton" id={props.value}>
        {props.value}
    </div>
  );
};

export default NumberButton;

