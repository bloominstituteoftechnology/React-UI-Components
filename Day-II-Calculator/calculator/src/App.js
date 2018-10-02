import React from 'react';
import './App.css';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import FunctionButton from './components/ButtonComponents/FunctionButton';
import MainButtons from './components/ButtonComponents/MainButtons';

const functionButtons = [
  {function: '%'},
  {function: 'x'},
  {function: '-'},
  {function: '+'},
  {function: '='}
]

const App = () => {
  return (
    <div>
      <CalcDisplay />
      <MainButtons />
      <div className="functions">
      {functionButtons.map(item => <FunctionButton function={item} />)}
    </div>
    </div>
  );
};

export default App;
