import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <div >
    <button className={`buttons ${props.className}`}>
      <h1>{props.number}</h1>
    </button>
    </div>
  );
}

export default NumberButton;
