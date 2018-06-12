import React from 'react';
import './Button.css';

const NumberButton = props => {
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

NumberButton.defaultProps = {
  buttonStyle: 'number-button'
};

export default NumberButton;
