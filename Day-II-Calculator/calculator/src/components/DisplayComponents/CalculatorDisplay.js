import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  // const clickHandler = () => {
  // };

  return (
    <div
      // onClick={clickHandler}
      className={props.displayStyle}>
        {props.name}
    </div>
  );
};

CalculatorDisplay.defaultProps = {
  name: '0',
  displayStyle: 'display'
};

export default CalculatorDisplay;
