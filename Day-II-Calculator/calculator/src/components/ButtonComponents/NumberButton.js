import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
      <div className={`basicButtonStyle ${props.type}`}>
        {props.text}
      </div>
      );
};

NumberButton.defaultProps ={
  style: 'basicButtonStyle',
}

export default NumberButton;
