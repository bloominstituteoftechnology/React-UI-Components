import React from 'react';

function NumberButton(props) {
  return (
    <button className={`number-btn ${props.type}`}>{props.value}</button>
  );
}

export default NumberButton;