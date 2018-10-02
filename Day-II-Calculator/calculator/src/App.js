import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const App = () => {
  return (
    <div>
      
      <div>
        <CalculatorDisplay displayStyle={'display'} text={'0'} />
      </div>

      <div>
        <ActionButton buttonStyle={'action'} text={'clear'} />
        <NumberButton buttonStyle={'operators'} text={'\u00f7'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(7)} text={'7'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(8)} text={'8'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(9)} text={'9'} />
        <NumberButton buttonStyle={'operators'} text={'x'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(4)} text={'4'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(5)} text={'5'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(6)} text={'6'} />
        <NumberButton buttonStyle={'operators'} text={'-'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(1)} text={'1'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(2)} text={'2'} />
        <NumberButton buttonStyle={'number'} onClick={() => this.inputDigit(3)} text={'3'} />
        <NumberButton buttonStyle={'operators'} text={'+'} />
      </div>

      <div>
        <NumberButton buttonStyle={'number_zero'} onClick={() => this.inputDigit(0)} text={'0'} />
        <NumberButton buttonStyle={'operators'} text={'='} />
      </div>

    </div>
  );
};

export default App;
