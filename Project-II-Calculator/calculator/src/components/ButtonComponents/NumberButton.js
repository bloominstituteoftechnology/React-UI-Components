import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div>
      <button
        className={props.buttonStyle}
        onClick={props.handleClick}
        datavalue={props.text}
      >
        {props.text}
      </button>
    </div>
  );
};

export default NumberButton;
