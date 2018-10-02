import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const buttonPlus = {
  buttonStyle: 'actionButton',
  text: '+'
}

const buttonMinus = {
  buttonStyle: 'actionButton',
  text: '-'
}

const buttonDivide = {
  buttonStyle: 'actionButton',
  text: '/'
}

const buttonMultiply = {
  buttonStyle: 'actionButton',
  text: '*'
}

const buttonEqual = {
  buttonStyle: 'actionButton',
  text: '='
}

const buttonClear = {
  buttonStyle: 'actionButton',
  text: 'clear'
}

const buttonZero = {
  buttonStyle: 'actionButton',
  text: '0'
}

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
   
      <div className="input">
        <div className="numsAndClear">
            <ActionButton buttonInfo={buttonClear}/>
            <div className="numPad">
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
              <NumberButton/>
            </div>
            <ActionButton buttonInfo={buttonZero}/>
        </div>
        <div className="operators">
          <ActionButton buttonInfo={buttonPlus}/>
          <ActionButton buttonInfo={buttonMinus}/>
          <ActionButton buttonInfo={buttonDivide}/>
          <ActionButton buttonInfo={buttonMultiply}/>
          <ActionButton buttonInfo={buttonEqual}/>
        </div>
      </div>
    </div>
  );
};

export default App;
