import React from 'react';
import './Button.sass';

const ActionButton = (props) => {

  return <button className="action" onClick={() => props.onClick(props.action)}>{props.action}</button>;

}

export default ActionButton;
