import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
      <div className="action-style" text="props.text">{props.text}</div>
  );
};

/*creating a action button template*/

export default ActionButton;
