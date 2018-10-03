import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import FunctionButton from './components/ButtonComponents/FunctionButton';
import MainButtons from './components/ButtonComponents/MainButtons';

const functionButtons = [
  {function: '÷'},
  {function: 'x'},
  {function: '-'},
  {function: '+'},
  {function: '='}
]

const App = () => {
  return (
    <div class="main-container">

    <div class="calc-display">
      <CalcDisplay />
    </div>

    <div class="main-content">
      <div class="main-keys">
      <MainButtons />
      </div>

      <div className="functions">
      {functionButtons.map(item => <FunctionButton function={item} />)}
    </div>
    </div>

    </div>
  );
};

export default App;
