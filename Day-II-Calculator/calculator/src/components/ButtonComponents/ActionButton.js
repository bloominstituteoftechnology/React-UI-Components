import React from 'react';
import './Button.css';


const ActionButton = props => {
  return(
    <div>{props.action}</div>
  );
};

ActionButton.defaultProps = {
  action : "none"
}

export default ActionButton;
