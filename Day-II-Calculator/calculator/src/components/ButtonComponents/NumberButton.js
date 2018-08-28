import React from 'react';


function NumberButton(props) {
  return (
    <button onClick={props.clickfn} className={`num-btn ${props.type}`}>{props.value}</button>
  );
}

export default NumberButton;