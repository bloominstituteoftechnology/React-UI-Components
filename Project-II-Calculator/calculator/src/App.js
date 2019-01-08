import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const ClearButton = {
  buttonStyle: 'action-button',
  text: 'clear'
}
const ZeroButton = {
  buttonStyle: 'action-button',
  text: '0'
}
const DivideButton = {
  buttonStyle: 'operand-button',
  text: '÷'
}
const MultiplyButton = {
  buttonStyle: 'operand-button',
  text: '×'
}
const SubtractionButton = {
  buttonStyle: 'operand-button',
  text: '-'
}
const AdditionButton = {
  buttonStyle: 'operand-button',
  text: '+'
}
const EqualsButton = {
  buttonStyle: 'operand-button',
  text: '='
}
const NineButton = {
  buttonStyle: 'integer-button',
  text: '9'
}
const EightButton = {
  buttonStyle: 'integer-button',
  text: '8'
}
const SevenButton = {
  buttonStyle: 'integer-button',
  text: '7'
}
const SixButton = {
  buttonStyle: 'integer-button',
  text: '6'
}
const FiveButton = {
  buttonStyle: 'integer-button',
  text: '5'
}
const FourButton = {
  buttonStyle: 'integer-button',
  text: '4'
}
const ThreeButton = {
  buttonStyle: 'integer-button',
  text: '3'
}
const TwoButton = {
  buttonStyle: 'integer-button',
  text: '2'
}
const OneButton = {
  buttonStyle: 'integer-button',
  text: '1'
}


const App = () => {
  return (
    <div className="calc-app">
      <CalculatorDisplay />
      <ActionButton buttonType={ClearButton} />
      <NumberButton buttonType={DivideButton} /> 
      <NumberButton buttonType={SevenButton} />
      <NumberButton buttonType={EightButton} />
      <NumberButton buttonType={NineButton} />
      <NumberButton buttonType={MultiplyButton} />
      <NumberButton buttonType={FourButton} />
      <NumberButton buttonType={FiveButton} />
      <NumberButton buttonType={SixButton} />
      <NumberButton buttonType={SubtractionButton} />
      <NumberButton buttonType={OneButton} />
      <NumberButton buttonType={TwoButton} />
      <NumberButton buttonType={ThreeButton} />
      <NumberButton buttonType={AdditionButton} />
      <ActionButton buttonType={ZeroButton} />
      <NumberButton buttonType={EqualsButton} />
    </div>
  );
};

export default App;
