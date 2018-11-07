import React from 'react';
import './Button.css';



function NumberButton(props) {
    return (
      <div className="numbers">
        <h3>{props.theNumbers.number}</h3>
      </div>
    );
  }
  
  export default NumberButton;