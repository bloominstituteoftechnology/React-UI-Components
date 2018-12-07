import React from 'react';
import './Button.css';


const NumberButton = props => (
    <div>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
  
  export default NumberButton;