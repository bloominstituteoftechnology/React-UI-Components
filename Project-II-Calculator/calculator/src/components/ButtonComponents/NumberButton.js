import React from 'react';
import './Button.css';

function NumberButton(props) {

  return (
    <div className={props.buttonStyle}>
      {props.text}
    </div>
  )
}


export default NumberButton

