import React from 'react';
import './Button.css'
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const Keypad = (props) => {

  const handleNumber = (e) => {
    props.handleNumber(e.target.value);
  } 


    return (
      <div className="container">
        <div className="row">
          <ActionButton value="clear" onClick={props.handleClear} />
          <NumberButton extraStyle="red" value="%" onClick={props.handleDivide} />
        </div>
        <div className="row">
          <NumberButton value="7" onClick={handleNumber} />
          <NumberButton value="8" onClick={handleNumber} />
          <NumberButton value="9" onClick={handleNumber} />
          <NumberButton extraStyle="red" value="X" onClick={props.handleMultiply} />
        </div>
        <div className="row">
          <NumberButton value="4" onClick={handleNumber} />
          <NumberButton value="5" onClick={handleNumber} />
          <NumberButton value="6" onClick={handleNumber} />
          <NumberButton extraStyle="red" value="-" onClick={props.handleSubtract} />
        </div>
        <div className="row">
          <NumberButton value="1" onClick={handleNumber} />
          <NumberButton value="2" onClick={handleNumber} />
          <NumberButton value="3" onClick={handleNumber} />
          <NumberButton extraStyle="red" value="+" onClick={props.handleAdd} />
        </div>
        <div className="row">
          <ActionButton value="0" onClick={props.clearCalc} />
          <NumberButton extraStyle="red" value="=" onClick={props.returnValue} />
        </div>
      </div>
    )
}

export default Keypad;