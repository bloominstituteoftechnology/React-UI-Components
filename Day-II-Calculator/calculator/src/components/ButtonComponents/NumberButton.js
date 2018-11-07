import React, { Fragment } from 'react';
import './Button.css';


function NumberButton(props) {
  return (
    <Fragment>
      <button className={props.button.buttonStyle} onClick={props.onClick}>{props.button.text}</button>
    </Fragment>
  );
}

export default NumberButton;
