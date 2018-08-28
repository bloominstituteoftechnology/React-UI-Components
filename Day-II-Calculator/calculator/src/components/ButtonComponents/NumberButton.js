import React from 'react';
import './Button.css';


// Create a <NumberButton /> component that can accept props and display any number/symbol passed down as text.
const NumberButton = (props) => (
  <button className={props.buttonStyle}>{props.text}</button>
);


export default NumberButton;