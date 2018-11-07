import React, { Fragment} from "react";
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import MathButtons from './components/ButtonComponents/MathButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'


const numberButtons = [
  
  {
    number: '7',
  },
  {
    number: '8',
  },
  {
    number: '9',
  },

  {
    number: '4',
  },
  {
    number: '5',
  },
  {
    number: '6',
  },
  {
    number: '1',
  },
  {
    number: '2',
  },
  {
    number: '3',
  },
];

const mathButtons = [
  {
    symbol: '/',
  },
  {
    symbol: 'X',
  },
  {
    symbol: '-',
  },
  {
    symbol: '+',
  },
  {
    symbol: '=',
  },
];

const App = () => {
  return (
    <Fragment>
      <h1>Calculator:</h1>
      <div class="calculator">
        <CalculatorDisplay />

        <div class="sub-calculator">
          <div class="calculator-left">
            <ActionButton action="Clear" />
            <div class="daNumbers">
              {numberButtons.map(number => {return (<NumberButton theNumbers={number} />)})}
            </div> 
            <ActionButton action="0" />
          </div>

          <div class="calculator-right">
            <div class="daMaths">
              {mathButtons.map(symbol => {return (<MathButtons theMaths={symbol} />)})}
            </div> 
          </div>
        </div>

      </div> 
    </Fragment>
);
}

export default App;
