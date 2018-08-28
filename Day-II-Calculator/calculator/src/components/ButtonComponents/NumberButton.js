import React from 'react';
import './Button.css';

const NumberButton = (props) =>{
  return (
    <div className="NumberButton">

      <button>{props.text}</button>

    </div>

  );
}
export default NumberButton;
