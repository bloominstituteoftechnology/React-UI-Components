import React from 'react';

function  ActionButton(props) {
  return (
    <button className={`action-btn ${props.type}`}>{props.value}</button>
  );
};

export default ActionButton;