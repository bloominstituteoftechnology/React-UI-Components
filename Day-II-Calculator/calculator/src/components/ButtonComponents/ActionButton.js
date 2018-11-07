import React from 'react';
import './Button.css';

function ActionButton(prop) {
    return (
      <div className="actions">
        <h3>{prop.theActions.symbol}</h3>
      </div>
    );
  }
  
  export default ActionButton;