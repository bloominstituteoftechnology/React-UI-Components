import React from 'react';
import './Button.css';

const NumberButton = props => {
  let style = {};
  if(props.className === "wide") {
    style = {
      width: "100%"
    }
  }
  return (
    <div className="numberBtn" 
         style={style} 
         onClick={(e) => props.clickBtn(e)} 
    > {props.text} </div>
  );
};

export default NumberButton;
