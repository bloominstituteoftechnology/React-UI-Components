import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className={`${props.styling} ${props.type} ${props.weight} number`}>
      {props.text}
    </div>
  );
};

export default NumberButton;