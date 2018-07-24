import React from 'react';
import './Button.css';

const NumberComponent = () => {
  return(
    <div className="number-buttons">
      <div>
        <ClearButton />
      </div>
      <div>
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
      </div>
      <div>
        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
      </div>
      <div>
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
      </div>
      <div>
        <NumberButton number="0" buttonStyle="zero" />
      </div>
    </div>
  );
}

const NumberButton = props => {
  return (
    <button className={props.buttonStyle}> {props.number} </button>
  );
}

NumberButton.defaultProps = {
  buttonStyle: 'number-button'
};

const ClearButton = () => {
  return (
    <button className="clear-button"> clear </button>
  )
}

export default NumberComponent;