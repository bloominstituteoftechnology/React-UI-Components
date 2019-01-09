import React from 'react';

import './Button.css';

const ActionButton = props => {
  return (
    <div className={`${props.buttonSize} action-button`} data-button={props.buttonName} onClick={e => props.function(e)}>{props.buttonName}</div>
  );
};

export default ActionButton;