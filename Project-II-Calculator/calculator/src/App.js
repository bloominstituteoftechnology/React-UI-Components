import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';


const One = {
  text: 1,
  buttonStyle: 'digit'
};

const Two = {
  text: 2,
  buttonStyle: 'digit'
};

const Three = {
  text: 3,
  buttonStyle: 'digit'
};

const Four = {
  text: 4,
  buttonStyle: 'digit'
};

const Five = {
  text: 5,
  buttonStyle: 'digit'
};

const Six = {
  text: 6,
  buttonStyle: 'digit'
};

const Seven = {
  text: 7,
  buttonStyle: 'digit'
};

const Eight = {
  text: 8,
  buttonStyle: 'digit'
};

const Nine = {
  text: 9,
  buttonStyle: 'digit'
};

const Zero = {
  text: 0,
  buttonStyle: 'digit big'
};

const Add = {
  text: '+',
  buttonStyle: 'action',
  operation: '+'
}

const Subtract = {
  text: '-',
  buttonStyle: 'action',
  operation: '-'
}

const Multiply = {
  text: 'x',
  buttonStyle: 'action',
  operation: '*'
}

const Divide = {
  text: '÷',
  buttonStyle: 'action',
  operation: '/'
}

const Clear = {
  text: 'clear',
  buttonStyle: 'action big',
}

const Equals = {
  text: '=',
  buttonStyle: 'action',
}

const CalcDisplay = {
  text: 0,
  buttonStyle: 'displaybar'
}

const App = () => {
  return (
    <div className='App'>
    <Display display = {CalcDisplay} />
    <ActionButton action = {Clear} />
    <ActionButton action = {Divide} />
    <NumberButton number = {Seven} />
    <NumberButton number = {Eight} />
    <NumberButton number = {Nine} />
    <ActionButton action = {Multiply} />
    <NumberButton number = {Four} />
    <NumberButton number = {Five} />
    <NumberButton number = {Six} />
    <ActionButton action = {Subtract} />
    <NumberButton number = {One} />
    <NumberButton number = {Two} />
    <NumberButton number = {Three} />
    <ActionButton action = {Add} />
    <NumberButton number = {Zero} />
    <ActionButton action = {Equals} />
    </div>
  );
};

export default App;
