import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className={`act-btn ${props.styles}`} onClick={props.clear}>{props.text}</button>
  );
}

ActionButton.defaultProps = {
  text: 'default',
  styles: ''
}

export default ActionButton;
