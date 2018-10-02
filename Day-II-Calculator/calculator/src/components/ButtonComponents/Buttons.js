import React from 'react';

import ActionButton from './ActionButton';
import NumberButton from './NumberButton';
import './Button.css';
import OperatorButton from './OperatorButton';

const clearButton = {
  text: 'clear',
};
const zeroButton = {
  text: '0',
};

const number = [
  {
    text: 7,
  },
  {
    text: 8,
  },
  {
    text: 9,
  },
  {
    text: 4,
  },
  {
    text: 5,
  },
  {
    text: 6,
  },
  {
    text: 1,
  },
  {
    text: 2,
  },
  {
    text: 3,
  },
];

const operator = [
  {
    text: '÷',
  },
  {
    text: '×',
  },
  {
    text: '−',
  },
  {
    text: '+',
  },
  {
    text: '=',
  },
];

function Buttons() {
  return (
    <div className="buttons">
      <div className="numpad">
        <ActionButton button={clearButton} />
        <div className="numeric">
          {number.map(button => {
            return <NumberButton button={button} />;
          })}
        </div>
        <ActionButton button={zeroButton} />
      </div>
      <div className="functions">
        {operator.map(button => {
          return <OperatorButton button={button} />;
        })}
      </div>
    </div>
  );
}

export default Buttons;
