import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const OneBtn = {
  buttonStyle: 'number-btn',
  text: '1',
};

const TwoBtn = {
  buttonStyle: 'number-btn',
  text: '2',
};

const ThreeBtn = {
  buttonStyle: 'number-btn',
  text: '3',
};

const FourBtn = {
  buttonStyle: 'number-btn',
  text: '4',
};

const FiveBtn = {
  buttonStyle: 'number-btn',
  text: '5',
};

const SixBtn = {
  buttonStyle: 'number-btn',
  text: '6',
};

const SevenBtn = {
  buttonStyle: 'number-btn',
  text: '7',
};

const EightBtn = {
  buttonStyle: 'number-btn',
  text: '8',
};

const NineBtn = {
  buttonStyle: 'number-btn',
  text: '9',
};

const ZeroBtn = {
  buttonStyle: 'action-btn zero',
  text: '0',
};

const ClearBtn = {
  buttonStyle: 'action-btn',
  text: 'clear',
};

const DivideBtn = {
  buttonStyle: 'math-btn',
  text: '÷',
};

const MultiplyBtn = {
  buttonStyle: 'math-btn',
  text: '×',
};

const SubtractBtn = {
  buttonStyle: 'math-btn',
  text: '-',
};

const AddBtn = {
  buttonStyle: 'math-btn',
  text: '+',
};

const EqualBtn = {
  buttonStyle: 'math-btn',
  text: '=',
};

const DisplayBtn = {
  buttonStyle: 'display-btn',
  text: '0',
};


const App = () => {
  return (
    <div className="calc-container">
      <div className="row uno">
      <CalculatorDisplay button={DisplayBtn} />
      </div>

      <div className="row dos">
      <ActionButton button={ClearBtn} />
      <ActionButton button={DivideBtn} />
      </div>

      <div className="row tres">
      <NumberButton button={SevenBtn} />
      <NumberButton button={EightBtn} />
      <NumberButton button={NineBtn} />
      <ActionButton button={MultiplyBtn} />
      </div>

      <div className="row cuatro">
      <NumberButton button={FourBtn} />
      <NumberButton button={FiveBtn} />
      <NumberButton button={SixBtn} />
      <ActionButton button={SubtractBtn} />
      </div>

      <div className="row cinco">
      <NumberButton button={OneBtn} />
      <NumberButton button={TwoBtn} />
      <NumberButton button={ThreeBtn} />
      <ActionButton button={AddBtn} />
      </div>

      <div className="row seis">
      <ActionButton button={ZeroBtn} />
      <ActionButton button={EqualBtn} />
      </div>

    </div>
  );
};

export default App;
