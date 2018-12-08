import React from 'react';
import './Button.css';

const ActionButton = props => (
    <div>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
  
  export default ActionButton;
 