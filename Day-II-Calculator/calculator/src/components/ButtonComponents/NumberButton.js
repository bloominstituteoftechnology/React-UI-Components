import React from 'react';

function NumberButton(props) {
  return (
    <button className={`numberbtn ${props.type}`}>{props.value}</button>
  );
}

export default NumberButton;