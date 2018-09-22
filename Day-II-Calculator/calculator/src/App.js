import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
    let numbers = ['clear', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let symbols = ['÷', 'x', '-', '+', '='];

  return (
    <div className="calculator">
    <div className="display"></div>
    <div className="buttons">
      <div className="numbers">
        {numbers.map(number => (<NumberButton type={number} />))}
      </div> {/* closes numbers */}
      <div className="symbols">
        {symbols.map(symbol => (<ActionButton type = {symbol} />))}
      </div>
    </div> {/* closes buttons */}
    
    </div> // closes calculator
  );
};

export default App;
