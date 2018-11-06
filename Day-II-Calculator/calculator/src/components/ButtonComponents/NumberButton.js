import React from 'react';
import './Button.sass';

const NumberButton = (props) => {

  return <button onClick={() => props.onBtnClick(props.id)}>{props.id}</button>;

}

export default NumberButton;
