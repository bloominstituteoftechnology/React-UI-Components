import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
      <div>
        <button className={`numberBtn ${props.opStyle}`}>{props.text}</button>
      </div>
    );
  };

  export default NumberButton;

  