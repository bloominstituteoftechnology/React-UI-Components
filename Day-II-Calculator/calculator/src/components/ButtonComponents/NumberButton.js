import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    // <button className="button">Number</button>
    <button className={`button ${props.buttonStyle}`}>{props.text}</button>
  )
}

NumberButton.defaultProps = {
  buttonStyle: "number",
  text: "3"
}
export default NumberButton