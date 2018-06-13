import React from 'react';
import './Button.css';

const NumberButton = (props) => {

  return (
    <div className="numButton" name= {props.name} id={props.name} type={props.name === "clear" ? "operator" : "number"} onClick={props.handleChange}>
        <h1>
        {props.name}
        </h1>
    </div>
  );
};

export default NumberButton;

