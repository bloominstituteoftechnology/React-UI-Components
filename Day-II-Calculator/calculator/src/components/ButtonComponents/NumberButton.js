import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    // <button className="button">Number</button>
    <button onClick={props.clickHandler} data-type={`${props.dataType}`} className={`button ${props.buttonStyle}`}>{props.text}</button>
  )
}

NumberButton.defaultProps = {
  buttonStyle: "number",
  text: "3"
}
export default NumberButton