import React from 'react';

function  ActionButton(props) {
  return (
    <button className={`large-button ${props.type}`}>{props.value}</button>
  );
};

export default ActionButton;