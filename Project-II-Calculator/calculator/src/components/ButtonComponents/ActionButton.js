import React from 'react';

import './Button.css';

const ActionButton = props => {
  return (
    <div className={`${props.buttonSize} action-button`} onClick={e => props.function(e)}>{props.text}</div>
  );
};

export default ActionButton;