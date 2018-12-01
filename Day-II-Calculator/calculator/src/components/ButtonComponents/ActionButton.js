import React from 'react';
import './Button.css';

const ActionButton = props => {
  let style = {};
  if(props.className === "wide") {
    style = {
      width: "100%",
      backgroundColor: "white",
      color: "black"
    }
  }
  return (
    <div className="actionBtn" style={style} >{props.text}</div>
  );
};

export default ActionButton;