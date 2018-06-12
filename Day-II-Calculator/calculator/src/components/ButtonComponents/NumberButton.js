import React from 'react';
import './Button.css';

const NumberButton = props => (
  <div className={`button-${props.kind}`}>
    <p>{props.item}</p>
  </div>
);

export default NumberButton;
