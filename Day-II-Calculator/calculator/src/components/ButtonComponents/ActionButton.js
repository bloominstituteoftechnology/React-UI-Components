import React from 'react';
import './Button.css';


const ActionButton = props => {
  return(
    <div className={`button actionButton ${props.className}`}>{props.action}</div>
  );
};

ActionButton.defaultProps = {
  action : "none"
}

export default ActionButton;
