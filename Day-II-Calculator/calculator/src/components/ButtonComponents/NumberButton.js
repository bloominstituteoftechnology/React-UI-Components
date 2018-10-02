import React from 'react';
import './Button.css';


// const NumberButton = props => {
//   return (
//     <button className={`button ${props.buttonStyle}`} value={props.value} onClick={props.onClick}>{props.label}</button>
//   )
// }
//
// export default NumberButton;

const NumberButton = props => {
  return (
    <button className={`button ${props.button.buttonStyle}`} value={props.button.value} onClick={props.onClick}>{props.button.label}</button>
  )
}

export default NumberButton;
