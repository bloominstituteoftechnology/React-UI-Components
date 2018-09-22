import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className={props.buttonStyle} data-operator={props.dataOperator}>
      {props.number}
    </div>
  );
};

export default NumberButton;
