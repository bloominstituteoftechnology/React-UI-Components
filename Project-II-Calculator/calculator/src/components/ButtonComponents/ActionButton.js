import React from 'react';
import './Button.css';




// Create an <ActionButton /> component that will be used for the 
// zero character and the clear button.



const ActionButton = props => {
    return (
      <div className="action-button button">
          {props.text}
      </div>
    );
  };

export default ActionButton;
