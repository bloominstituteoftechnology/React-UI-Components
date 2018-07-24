import React from 'react';
import './Button.css';

const ActionButton = props => {
  // const clickHandler = () => {
  // };

  return (
    <button
      // onClick={clickHandler}
      className={`default-button ${props.buttonStyle}`}>
        {props.name}
    </button>
  );
};

ActionButton.defaultProps = {
  buttonStyle: 'action-button'
};

export default ActionButton;
