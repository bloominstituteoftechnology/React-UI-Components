import React from 'react';

const NumberButton = props => {
  return (
    <div className={props.buttonSize} onClick={e => props.function(e)}>{props.text}</div>
  );
};

export default NumberButton;