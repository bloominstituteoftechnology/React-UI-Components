import React from 'react';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const ButtonContainer = props => {
  // console.log(props);
  return (
    <div className="button-container">
      <div className="left">
        <NumberButton number="clear" buttonStyle="big" />

        <div className="numpad">
          {props.numbers.map((number, index) => (
            <NumberButton number={number.text} key={index} buttonStyle="number" />
          ))}
        </div>

        <NumberButton number="0" buttonStyle="big" /></div>

      <div className="right">
        {props.symbols.map((symbol, index) => (
          <ActionButton symbol={symbol.text} key={index} buttonStyle="symbol" />
        ))}
      </div>
    </div>
  );
}

export default ButtonContainer;