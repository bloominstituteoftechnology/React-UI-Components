import React from 'react';
import '../../index.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const Buttons = props => {
  return (
    <div className="buttons">
      <div className="numberpad">
        <ActionButton
          text="clear"
          buttonStyle="clear"
          handleClick={props.clear}
        />
        <div className="row">
          <NumberButton text="7" handleClick={props.numberClick} />
          <NumberButton text="8" handleClick={props.numberClick} />
          <NumberButton text="9" handleClick={props.numberClick} />
        </div>
        <div className="row">
          <NumberButton text="4" handleClick={props.numberClick} />
          <NumberButton text="5" handleClick={props.numberClick} />
          <NumberButton text="6" handleClick={props.numberClick} />
        </div>
        <div className="row">
          <NumberButton text="1" handleClick={props.numberClick} />
          <NumberButton text="2" handleClick={props.numberClick} />
          <NumberButton text="3" handleClick={props.numberClick} />
        </div>
        <ActionButton text="0" handleClick={props.numberClick} />
      </div>
      <div className="symbol">
        <NumberButton text="/" buttonStyle="red" handleClick={props.operator} />
        <NumberButton text="x" buttonStyle="red" handleClick={props.operator} />
        <NumberButton text="-" buttonStyle="red" handleClick={props.operator} />
        <NumberButton text="+" buttonStyle="red" handleClick={props.operator} />
        <NumberButton text="=" buttonStyle="red" handleClick={props.equal} />
      </div>
    </div>
  );
};

export default Buttons;
