import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <div class={props.customClass}>
      {props.value}
    </div>
  );
};

export default NumberButton;
