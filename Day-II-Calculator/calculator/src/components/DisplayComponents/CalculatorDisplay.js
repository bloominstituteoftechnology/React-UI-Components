import React from "react";
import "./Display.css";

const CalcDisplay = props => {
  console.log(props.label);
  return (
    <div className='display'>
      {props.label}
    </div>
  );
};

export default CalcDisplay;
