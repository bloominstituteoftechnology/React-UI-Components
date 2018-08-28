import React from 'react';

NumberButton = props => {
  return (
    <button className={`number-button ${props.type}`}>{props.value}</button>
  );
};

export default NumberButton;
