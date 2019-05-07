import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonContainer = props => {
  console.log(props);
  return (
    <div className="button-container">
      <div className="left">
        <NumberButton number="clear" buttonStyle="big" />
        <div className="numpad">
          {props.numbers.map(number => (
            <NumberButton number={number.text} buttonStyle="number" />
          ))}
        </div>
        <NumberButton number="0" buttonStyle="big" /> </div>
      <div className="right">
        {props.symbols.map(symbol => (
          <ActionButton symbol={symbol.text} buttonStyle="symbol" />
        ))}
      </div>
    </div >
  );
}

export default ButtonContainer;