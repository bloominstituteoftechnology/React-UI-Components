import React from 'react';


function NumberButton(props) {
  return (
    <button className={`num-btn ${props.type}`}>{props.value}</button>
  );
}

export default NumberButton;