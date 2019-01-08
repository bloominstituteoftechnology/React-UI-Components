import React from 'react';

const NumberButton = props => {
  return (
    <div className={props.buttonSize}>{props.text}</div>
  );
};

export default NumberButton;