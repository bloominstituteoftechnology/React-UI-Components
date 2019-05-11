import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  <div className={`btn-small ${props.bgColor}`}>
    {props.text}
  </div>
}

export default NumberButton