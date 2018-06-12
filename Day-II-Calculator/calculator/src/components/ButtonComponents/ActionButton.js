import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div class= {props.customClass}>
      {props.value}
    </div>
  );
};

export default ActionButton;
