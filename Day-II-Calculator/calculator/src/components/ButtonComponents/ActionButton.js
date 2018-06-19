import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div>
      <button className="action-styles">{props.name}</button>
    </div>
  );
};

export default ActionButton;
