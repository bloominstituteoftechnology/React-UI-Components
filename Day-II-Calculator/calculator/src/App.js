import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  let numbers = ['clear', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  let symbols = ['÷', '×', '−', '+', '='];

  return (
    <section className="calculator">
      <CalculatorDisplay />
      <div className="buttons">
          <div className="numbers">
            {numbers.map(number => (<NumberButton type={number}/>))}
          </div>
          <div className="symbols">
            {symbols.map(symbol => (<ActionButton type={symbol}/>))}
          </div>
      </div>
    </section>
  );
};

export default App;
