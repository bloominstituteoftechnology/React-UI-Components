import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
      <div className='numberButton'>
        {props.color}
        {props.text}
        {props.width}
      </div>
      );
};

export default NumberButton;
