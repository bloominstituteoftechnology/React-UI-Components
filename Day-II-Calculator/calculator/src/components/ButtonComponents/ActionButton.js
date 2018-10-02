import React from 'react';
import './Button.css';

const ActionButton = (props) => (
  <button className={`lg-btn`} value={props.value} onClick={props.onClick}>{props.value}</button>
);

export default ActionButton;