import React from 'react';
import './Button.css';

const NumberButton = (props) => {

  return (
    <div className="numButton" id={props.value}>
        <h1>
        {props.value}
        </h1>
    </div>
  );
};

export default NumberButton;

