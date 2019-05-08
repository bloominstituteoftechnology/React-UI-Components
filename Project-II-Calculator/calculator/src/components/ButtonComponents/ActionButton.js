import React from 'react';
import './Button.css';
import './NumberButton.js';



const ActionButton = props => {
  return (
          <div>
            <button className={`action ${props.className}`}>
              <h1>{props.text}</h1>
            </button>
          </div>
        );

}

export default ActionButton;
