import React from 'react';
import './Button.css';


  function MathButton(props) {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
  }

  export default MathButton;